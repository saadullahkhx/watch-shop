import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background-color: #fff;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

    h1 {
        
    }

    .header-content {
        border: 1px solid lightgray;
        display: flex;
        margin: 10px auto;
        padding: 15px;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        @media screen and (max-width: 1000px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    .main-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 10px;

        span {
            font-size: 17px;
        }

        button {
            width: 200px;
            margin-top: 10px;
            padding: 12px;
        }
    }
`