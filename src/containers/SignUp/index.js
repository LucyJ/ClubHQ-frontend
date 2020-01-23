import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { REGISTER } from './graphql'
import { LoginInput, LoginContainer, LoginButton } from './styles'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [classYear, setClassYear] = useState('')
  const history = useHistory()

  const [reg, { loading, error: regError }] = useMutation(
    REGISTER,
    {
      variables: {
        email, password, firstName, lastName, classYear,
      },
      onCompleted: ({ register: { token } }) =>{
        localStorage.setItem('token', token)
        history.push('/')
      },
    },
  )

  if (loading) return 'Loading!'
  if (regError) return `Error ${regError}`


  return (
    <LoginContainer>
      <p style={{
        fontFamily: 'Arial', fontWeight: 'bold', fontSize: '4vh', margin: '0px',
      }}
      >
Sign Up:
      </p>
      <div style={{
        display: 'flex', justifyContent: 'space-between', width: '60%',
      }}
      >
        <LoginInput name="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} style={{ flex: '1', marginRight: '1vh' }} />
        <LoginInput name="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} style={{ flex: '1', marginLeft: '1vh' }} />
      </div>
      <LoginInput name="classYear" placeholder="Class Year" value={classYear} onChange={e => setClassYear(e.target.value)} />
      <LoginInput name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
      <LoginInput type="password" name="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
      <LoginButton onClick={reg}>Sign Up</LoginButton>
    </LoginContainer>
  )
}

export default SignUp
