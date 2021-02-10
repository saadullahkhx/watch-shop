import styled from 'styled-components';

export const Card = styled.div`
    width: 45vw;
    margin: 15px;
    img {
        width: 100%;
    }

    &:hover {
        box-shadow: 0 20px 10px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: all 0.2s ease-in;
    }

    @media screen and (max-width: 768px) {
        width: 100vw;
        margin: 15px;
    }
`

