import styled from 'styled-components';

export const ItemsPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 70vw;
    margin: 10px auto;
    padding: 10px;
  }

  .item-preview-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
`;
