import styled from 'styled-components';

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`