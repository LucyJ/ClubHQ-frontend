import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const realAuth = () => {
  const token = localStorage.getItem('token')
  console.log(token)
  return !token
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      realAuth() === false
        ? <Component {...props} />
        : <Redirect to="/Login" />
    )}
  />
)

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100)
  },
}
