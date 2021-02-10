import styled from 'styled-components';

export const CartPageWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    button {
        margin: 20px 0;
    }

    .empty-cart-message {
        margin: 20px 0;
        text-align: center;
        color: gray;
    }
`