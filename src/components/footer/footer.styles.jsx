import styled from 'styled-components'


export const FooterWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #404040;
    color: white;
    height: 300px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
        height: 500px;
    }

    .main {
        font-weight: bold;
        letter-spacing: 1.5px;
    }

    .footer-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        a {
            color: white;
            text-decoration: none;
            margin: 5px 0px;

            &:hover {
                color: lightgray;
            }
        }
    }
`