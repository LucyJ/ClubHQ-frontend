import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import {
  LOGIN,
} from './graphql.js'
import { LoginInput, LoginContainer, LoginButton, Error } from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const history = useHistory()

  const [log, { loading: logLoading, error: logError }] = useMutation(
    LOGIN,
    {
      variables: { email, password },
      onCompleted: ({ login: { token } }) => {
        localStorage.setItem('token', token)
        history.push('/')
      },
      onError: ({ graphQLErrors }) => {
        if (graphQLErrors) {
          // graphQLErrors.map(({ message, locations, path }) => console.log(
          // `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          setMessage(graphQLErrors[0].message)
          // ))
        }
      },
    },
  )

  if (logLoading) return 'Loading'

  return (
    <LoginContainer>
      <p style={{
        fontFamily: 'Arial', fontWeight: 'bold', fontSize: '4vh', margin: '0px',
      }}
      >
Log In:
      </p>
      <LoginInput name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <LoginInput name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <LoginButton onClick={log}>Log In</LoginButton>
      {logError ? <Error>{message}</Error> : <p />}
    </LoginContainer>
  )
}

export default Login
