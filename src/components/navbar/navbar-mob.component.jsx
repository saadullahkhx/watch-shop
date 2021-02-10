import React from 'react'
import { Navlink, SocialIconsMobile, FacebookIcon, InstagramIcon, CartIcon, NavbarMobileContainer } from './navbar.styles';


const NavbarMobile = () => {
    return (
        <NavbarMobileContainer>
            <Navlink to='/pk/collections/mens-watches'>MENS</Navlink>
            <Navlink to='/pk/collections/womens-watches'>WOMENS</Navlink>
            <SocialIconsMobile>
                <Navlink to='/cart'><CartIcon /></Navlink>
                <a href='https://www.instagram.com'><InstagramIcon /></a>
                <a href='https://www.facebook.com'><FacebookIcon /></a>
            </SocialIconsMobile>
        </NavbarMobileContainer>
    )
}

export default NavbarMobile;

