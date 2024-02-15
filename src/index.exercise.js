import React from 'react'
import {createRoot} from 'react-dom/client'
import {Dialog} from '@reach/dialog'
import {VisuallyHidden} from '@reach/visually-hidden'

import {Logo} from 'components/logo'
import {LoginForm} from './components/login-form'

import '@reach/dialog/styles.css'

function App() {
  const [dialogOpen, setDialogOpen] = React.useState('none')

  const openLoginDialog = () => {
    setDialogOpen('login')
  }

  const openRegisterDialog = () => {
    setDialogOpen('register')
  }

  const closeDialog = () => {
    setDialogOpen('none')
  }

  const login = formData => {
    console.log(formData)
  }

  const register = formData => {
    console.log(formData)
  }

  return (
    <main>
      <div>
        <Logo width="80" height="80" />
        <h1>Bookshelf</h1>

        <div>
          <button onClick={openLoginDialog}>Login</button>
        </div>
        <div>
          <button onClick={openRegisterDialog}>Register</button>
        </div>

        <Dialog
          isOpen={dialogOpen === 'login'}
          onDismiss={closeDialog}
          aria-label="Login form"
        >
          <button onClick={closeDialog}>Close</button>

          <h2>Login</h2>

          <LoginForm onSubmit={login} buttonText="Login" />
        </Dialog>

        <Dialog
          isOpen={dialogOpen === 'register'}
          onDismiss={closeDialog}
          aria-label="Register form"
        >
          <button onClick={closeDialog}>Close</button>

          <h2>Register</h2>

          <LoginForm onSubmit={register} buttonText="Register" />
        </Dialog>
      </div>
    </main>
  )
}

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)

export {root}
