import styled from 'styled-components';

export const ItemOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .item-details {
    display: flex;
    align-items: center;
    img {
      width: 300px;
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .item-description {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
      span {
        font-weight: bold;
        margin: 10px;
      }
    }
  }

  .buttons {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    button {
      margin: 10px 10px;
      padding: 10px 15px;
    }
  }
`;
