import styled from 'styled-components';


export const TopHeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    letter-spacing: 2px;
    
    a {
        color: white;
        margin: 5px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`