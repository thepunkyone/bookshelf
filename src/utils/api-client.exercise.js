import * as auth from '../auth-provider'

const apiURL = process.env.REACT_APP_API_URL

function client(endpoint, {
  token,
  headers: customHeaders,
  data,
  ...customConfig
} = {}) {
  let config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      ...customHeaders
    },
    ...customConfig
  }

  if (data) {
    config = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        'Content-Type': 'application/json',
        ...customHeaders
      },
      ...customConfig
    }
  }


  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    if (response.status === 401) {
      await auth.logout()

      window.location.assign(window.location)
      return Promise.reject({message: 'Please re-authenticate.'})
    }

    const data = await response.json()

    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
