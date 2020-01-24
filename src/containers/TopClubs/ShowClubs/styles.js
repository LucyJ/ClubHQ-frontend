import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ResultCard = styled.div`
    width: 75%;
    display: flex;
    border: none;
    padding: 3vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 2vh;
    margin: 1vh;
    transition: 0.25s;
    &:hover {
        width: 85%;
        box-shadow: 1px 4px 10px ${({ theme }) => theme.colors.crimson}, 1px 4px 10px ${({ theme }) => theme.colors.crimson};
    }
`

export const ClubText = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: black;
    font-weight: bold;
    font-size: 4vh;
    margin-left: 5%;

`

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    flex: 1;
    text-decoration: none;
    width: 100%;
    display: flex;
    border: none;
    margin-left: auto;
    margin-right: auto;
`
