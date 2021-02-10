import React from 'react';
import {
  Navlink,
  SocialIconsMobile,
  FacebookIcon,
  InstagramIcon,
  CartIcon,
  NavbarMobileContainer,
} from './navbar.styles';

const NavbarMobile = ({ setMobileMenu }) => {
  const handleClick = () => {
    setMobileMenu(false);
  };
  return (
    <NavbarMobileContainer>
      <Navlink to='/pk/collections/mens-watches' onClick={handleClick}>
        MENS
      </Navlink>
      <Navlink to='/pk/collections/womens-watches' onClick={handleClick}>
        WOMENS
      </Navlink>
      <SocialIconsMobile>
        <Navlink to='/cart' onClick={handleClick}>
          <CartIcon />
        </Navlink>
        <a href='https://www.instagram.com' onClick={handleClick}>
          <InstagramIcon />
        </a>
        <a href='https://www.facebook.com' onClick={handleClick}>
          <FacebookIcon />
        </a>
      </SocialIconsMobile>
    </NavbarMobileContainer>
  );
};

export default NavbarMobile;
