import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMobile from './navbar-mob.component';
import {
  NavbarContainer,
  MainNav,
  PrimaryOptions,
  Navlink,
  SocialIcons,
  CartIcon,
  InstagramIcon,
  BurgerIcon,
  FacebookIcon,
} from './navbar.styles';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const showMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <NavbarContainer>
      <MainNav>
        <Link to='/'>
          <h1 className='site-logo'>WATCH IT</h1>
        </Link>
        <PrimaryOptions>
          <Navlink to='/pk/collections/mens-watches'>MENS</Navlink>
          <Navlink to='/pk/collections/womens-watches'>WOMENS</Navlink>
        </PrimaryOptions>
        <SocialIcons>
          <Navlink to='/cart'>
            <CartIcon />
          </Navlink>
          <a href='https://www.instagram.com'>
            <InstagramIcon />
          </a>
          <a href='https://www.facebook.com'>
            <FacebookIcon />
          </a>
        </SocialIcons>
      </MainNav>
      <BurgerIcon onClick={() => showMenu()} />
      {mobileMenu ? <NavbarMobile setMobileMenu={setMobileMenu} /> : null}
    </NavbarContainer>
  );
};

export default Navbar;
