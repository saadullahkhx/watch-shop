import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* padding: 10px; */
    width: 40vw;
    margin-top: 20px;
    align-items: center;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */

    @media screen and (max-width: 1024px) {
        width: 90vw;
    }

    button {
        width: 250px;
        margin: 10px 0;

        @media screen and (max-width: 1024px) {
            font-size: 14px;
        }
    }

    h4 {
        border-bottom: 1px solid lightgray;
        text-align: center;
        letter-spacing: 2px;
        margin: 5px 0;
        text-align: center;
    }
`

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    font-weight: bold;
    width: 100%;
`