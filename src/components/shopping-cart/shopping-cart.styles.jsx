import styled from 'styled-components';

export const ShoppingCartWrap = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 80%;
    background: #f8f8f8;
    padding: 20px;
    border: 1px solid lightgray;
    h4 {
        width: 100%;
        text-align: center;
        letter-spacing: 2px;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    h5 {
        margin: 0;
    }
`

export const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid black;


    @media screen and (max-width: 1024px) {
        .product {
            width: 50%;
        }
    }
`

export const HeaderBlock2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;
    align-items: center;

    @media screen and (max-width: 1024px) {
        justify-content: flex-end;
        width: 50%;
        .price {
            display: none;
        }

        .total {
            display: none;
        }
    }
`