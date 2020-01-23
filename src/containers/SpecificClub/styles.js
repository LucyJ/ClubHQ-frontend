import styled from 'styled-components'

export const LargeContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    margin: 2vh;
`

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    border: none;
    border-radius: 2vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
export const Title = styled.p`
    margin: 2vh;
    font-size: 5vh;
    color: black;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-weight: bold;
    margin-left: 8vh;

`
export const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    background-color: #195efa;
    border-radius: 2vh;
    padding: 5vh;
    margin: 2vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 100%;

`
export const SummaryHead = styled.h1`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-weight: bold;
`

export const Summary = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
`

export const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2vh;
    flex: 1;
`
export const SmallerContainer = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items:center;
    background-color: ${({ theme }) => theme.colors.Columbia.classic};
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-weight: bold;
    margin: 1vh;
    padding: 2vh;
    border-radius: 2vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Error = styled.div`
    font-family: ${({ theme }) => theme.fonts.standard};
`
