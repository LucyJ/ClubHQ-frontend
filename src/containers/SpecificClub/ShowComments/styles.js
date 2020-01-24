import styled from 'styled-components'

export const CommentContainer = styled.div`
    display: flex;
    padding: 1vh;
    margin: 1vh;
    width: 70%;
    background-color: lightgrey;
    border-radius: 1vh;
`

export const Comment = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    margin: 1vh;
    margin-left: 2vh;
    font-size: 4vh;

`
export const CommentInput = styled.input`
    font-family: ${({ theme }) => theme.fonts.standard};
    margin: 1vh;
    flex: 3;
    background-color: white;
    border: none;
    border-radius: 1vh;
    padding: 1vh;
    padding-left: 2vh;
    font-size: 3vh;
`

export const CommentButton = styled.button`
    font-family: ${({ theme }) => theme.fonts.standard};
    flex: 1;
    border: none;
    border-radius: 1vh;
    background-color: ${({ theme }) => theme.colors.green};
    font-size: 3vh;
    font-weight: bold;
    color: white;
`
