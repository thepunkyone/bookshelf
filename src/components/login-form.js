import React from 'react'

export function LoginForm({onSubmit, buttonText}) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()

        onSubmit({
          email: e.target.elements.username.value,
          password: e.target.elements.password.value,
        })
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>

      <button type="submit">{buttonText}</button>
    </form>
  )
}
