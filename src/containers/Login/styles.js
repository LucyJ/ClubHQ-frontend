import styled from 'styled-components'

export const LoginInput = styled.input`
    border: lightgrey;
    border-radius: 1vh;
    background-color: white;
    height: 5vh;
    margin-top: 2vh;
    margin-bottom: 1vh;
    width: 60%;
    padding: 0.5vh;
    font-size: 2vh;
    padding-left: 2vh;
`

export const LoginContainer = styled.div`
    border: none;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 3vh;
    margin: auto;
    margin-top: 4vh;
    margin-bottom: 4vh;
    height: 50vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding-bottom: 9%;
    padding-top: 9%;
`

export const LoginButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.gold};
    font-family: ${({ theme }) => theme.fonts.standard};
    font-weight: bold;
    font-size: 2vh;
    color: white;
    width: 30%;
    padding: 2vh;
    border-radius: 1vh;
    margin-top: 2vh;
    text-align: center;
    transition: .25s;
    &:hover{
        background-color: ${({ theme }) => theme.colors.darkgold};
        width: 40%;
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }

`
export const Error = styled.div`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: red;
`
