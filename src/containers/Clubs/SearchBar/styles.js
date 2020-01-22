import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    border: none;
    width: 70%;
    margin: 2vh;
    padding: 2vh;
    border-radius: 0.2vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
export const SearchInput = styled.input`
    border: 0.3vh solid grey;
    border-radius: 2vh;
    background-color: white;
    padding: 1vh;
    width: 80%;
    height: 5vh;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.standard};
    font-size: 2vh;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 5px #0066ff;
    }
`

export const SearchButton = styled.button` 
    border: none;
    border-radius: 1vh;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.green};
    color: white;
    font-family: ${({ theme }) => theme.fonts.standard};
    margin-left: 1vh;
    padding: 1vh;
    height: 6vh;
    font-size: 2vh;
    &:focus{
        outline: none;
        box-shadow: 0px 0px 5px #0066ff;
    }
    &:hover {
        background-color: ${({ theme }) => theme.colors.darkgreen};
    }
`

export const SortContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1vh;
    align-items: center;
    justify-content: flex-start;
`

export const SmallButton = styled.button`
    border: none;
    background-color: grey;
    font-family: ${({ theme }) => theme.fonts.standard};
    padding: 1vh;
    margin-left: 1%;
    border-radius: 1vh;
    color: white;


`
