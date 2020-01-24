import React, { useState } from 'react'
import {
  NavContainer, NavButton, LogoButton, Image, LogoText, LogoLink, ButtonLink,
  LogInOut,
} from './styles'


const NavBar = ({ setTokenState }) => {
  const Logout = () => {
    if (!localStorage.getItem('token')) {
      return (
        <ButtonLink to="/Login">
          <LogInOut styles={{ backgroundColor: '#c08a1d' }}>
            Login
          </LogInOut>
        </ButtonLink>
      )
    }

    setTokenState(1)
    return (
      <ButtonLink to="/">
        <LogInOut
          styles={{ backgroundColor: '#c08a1d' }}
          onClick={() => {
            localStorage.removeItem('token')
            return setTokenState(0)
          }}
        >
              Logout
        </LogInOut>
      </ButtonLink>
    )
  }


  return (
    <NavContainer>
      <LogoLink to="/">
        <LogoButton>
          <Image src="./ClubHQ.png" alt="ClubHQ" />
        </LogoButton>
        <LogoButton>
          <LogoText>ClubHQ</LogoText>
        </LogoButton>
      </LogoLink>
      <ButtonLink to="/Browse">
        <NavButton>
            Browse All Clubs
        </NavButton>
      </ButtonLink>
      <ButtonLink to="/Browse">
        <NavButton>
            Top Clubs
        </NavButton>
      </ButtonLink>
      <ButtonLink to="/Donate">
        <NavButton styles={{ backgroundColor: '#c08a1d' }}>
            Donate
        </NavButton>
      </ButtonLink>
      <Logout />
    </NavContainer>
  )
}

export default NavBar
