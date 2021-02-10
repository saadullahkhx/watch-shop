import styled from 'styled-components';

export const ItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 10px;
  width: 400px;
  height: 450px;

  h1 {
    @media screen and (max-width: 768px) {
    }
  }

  img {
    width: 200px;
    height: 200px;

    &:hover {
      opacity: 0.6;
    }
  }
  .button-and-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 10px;
  }

  .btn {
    margin-top: 10px;
    padding: 14px;
    font-size: 16px;
  }

  .title-and-price {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
    padding: 10px;

    span {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;
