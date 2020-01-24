import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const JumboContainer = styled.div`
    width: 100%;
    background-color: black;
    position: relative;
    text-align: center;
`

export const JumboImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 60%;
    max-width: 100%;
    width:100%;

`
export const HomeText = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    font-size: 15vh;
    color: white;
    margin: 0.5vh;
`

export const TextContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
export const LoginButton = styled.button`
    border: none;
    border-radius: 1vh;
    color: white;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-size: 3vh;
    font-weight: bold;
    padding: 2vh;
    margin: 1vh;
    width: 100%;
    transition: .25s;
    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`
export const StyledLink = styled(Link)`
    border: none;
    text-decoration: none;
    width: 30%;
    transition: .25s;
    &:hover {
        cursor: pointer;
        width: 40%;
    }
    &:focus {
        outline: none;
    }
`
