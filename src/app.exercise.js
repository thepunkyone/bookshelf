/** @jsx jsx */
import {jsx} from '@emotion/core'
import * as React from 'react'
import * as auth from 'auth-provider'
import {client} from './utils/api-client'

import {AuthenticatedApp} from './authenticated-app'
import {UnauthenticatedApp} from './unauthenticated-app'

const getUser = async () => {
  const token = await auth.getToken()

  let user = null

  if (token) {
    const data = await client('me', {token})

    user = data.user
  }

  return user
}


function App() {
  const [user, setUser] = React.useState(null)


  React.useEffect(() => {
    getUser().then(u => setUser(u))
  }, [])


  const login = (form) => {
    return auth.login(form).then(u => setUser(u))
  }

  const register = (form) => {
    return auth.register(form).then(u => setUser(u))
  }

  const logout = () => {
    return auth.logout().then(() => setUser(null))
  }

  if (user) {
    return <AuthenticatedApp user={user} logout={logout}/>
  }

  return <UnauthenticatedApp login={login} register={register}/>
}

export {App}

/*
eslint
  no-unused-vars: "off",
*/
