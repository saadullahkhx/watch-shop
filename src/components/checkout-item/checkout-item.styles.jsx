import styled from 'styled-components';

export const ItemWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .image-title-close {
        display: flex;
        align-items: center;
        width: 75%;
        img {
            width: 60px;
            height: 60px;
            margin: 0px 10px;
        }
    }
`

export const ItemDetails = styled.div`
    display: flex;
    width: 25%;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    font-weight: bold;

    @media screen and (max-width: 1024px) {
        justify-content: flex-end;
        /* width: 40%; */
        .hidden {
            display: none;
        }
    }
`