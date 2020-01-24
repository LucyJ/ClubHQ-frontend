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
    background-color:  ${({ theme }) => theme.colors.gold};
    border-radius: 2vh;
    padding: 5vh;
    margin: 2vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    

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
export const RatingHead = styled.h1`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-weight: bold;
    font-size: 2vh;
`

export const Rating = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-size: 2vh;
    margin-left: 1vh;
`

export const EmailHead = styled.h1`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-weight: bold;
    font-size: 2vh;
`

export const Email = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-size: 2vh;
    margin-left: 1vh;
`

export const WebsiteHead = styled.h1`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-weight: bold;
    font-size: 2vh;
`

export const Website = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-size: 2vh;
    margin-left: 1vh;
`

export const SizeHead = styled.h1`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-weight: bold;
    font-size: 2vh;
`

export const Size = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-size: 2vh;
    margin-left: 1vh;
`

export const CompetitivenessHead = styled.h1`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-weight: bold;
    font-size: 2vh;
`

export const Competitiveness = styled.p`
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    margin-left: 1vh;
`

export const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2vh;
    flex: 1;
    font-size: 2vh;
    height: 100%;
`
export const SmallerContainer = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items:center;
    background-color:  ${({ theme }) => theme.colors.crimson};
    font-family: ${({ theme }) => theme.fonts.standard};
    color: white;
    font-weight: bold;
    margin: 1vh;
    padding: 2vh;
    border-radius: 2vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const BottomContainer = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items:center;
    background-color: #211a2e;
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
