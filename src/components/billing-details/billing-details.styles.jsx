import styled from 'styled-components';


export const BillingDetailsContainer = styled.div`
    width: 95vw;

    h4 {
        letter-spacing: 2px;
        border-bottom: 1px solid lightgray;
    }

    form {
        display: flex;
        justify-content: space-evenly;
        padding: 20px;

        .terms-and-conditions {
            display: flex;
        }

        label {
            font-weight: bold;
        }

        @media screen and (max-width: 1024px) {
            flex-direction: column;
        }
    }
`

// export const BillingDetailsContainer = styled.div`
//     width: 95vw;
//     background: #f8f8f8;
//     /* padding: 20px; */
//     form {
//         input {
//             width: 50vw;
//         }
//         display: flex;
//         justify-content: space-evenly;
//         .checkout-and-payments {
//             display: flex;
//             flex-direction: column;
//             width: 40vw;
//         }
//         @media screen and (max-width: 1024px) {
//         width: 100vw;
//         flex-direction: column;
//         }
//     }
//     h3 {
//         border-bottom: 1px solid lightgray;
//         width: 50vw;
//         margin: 0px;
//     }

//     Form label {
//         font-weight: bold;
//     }
// `