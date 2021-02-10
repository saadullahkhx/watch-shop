import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';


export const NavbarContainer = styled.div`
    border-bottom: 1px solid lightgray;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 1000;
    background: #fff;
    
    a {
        color: black;
        text-decoration: none;
    }
`
export const MainNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 100%;
    width: 100%;
    h1 {
        font-weight: bold;
    }
`
export const PrimaryOptions = styled.div`
    a {
        margin: 15px;
    }

    @media screen and (max-width: 768px) {
            display: none;
    }
`
export const Navlink = styled(Link)`
    font-size: 20px;
    letter-spacing: 2px;
    color: black;
    text-decoration: none;
    &:hover {
        color: gray;
        text-decoration: none;
    }
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }

`
export const CartIcon = styled(FaShoppingCart)`
    height: 25px;
    width: 25px;
    margin: 10px;
`
export const InstagramIcon = styled(AiFillInstagram)`
    height: 25px;
    width: 25px;
    margin: 10px;
`
export const FacebookIcon = styled(AiFillFacebook)`
    height: 25px;
    width: 25px;
    margin: 10px;
`

export const BurgerIcon = styled(FaBars)`
    height: 25px;
    width: 25px;
    margin: 10px;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: flex;
    }
`

export const NavbarMobileContainer = styled.div`
        display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100px;
        right: 0;
        width: 100%;
        background: #fff;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid gray;
        z-index: 100;

        a {
                margin: 15px;
        }
    }
`

export const SocialIconsMobile = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* padding: 10px; */
`