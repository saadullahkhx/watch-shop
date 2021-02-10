import React from 'react'
import { Link } from 'react-router-dom'
import { FooterWrap } from './footer.styles';
const Footer = () => {
    return (
        <FooterWrap>
            <div className='footer-menu main'>
                <h3>Watch It</h3>
                <span>Whatsapp: +92 341 3397700</span>
                <span>watchit@gmail.com</span>
                <span>www.facebook.com/watchit</span>
                <span>Instagram @watchit</span>
            </div>
            <div className='footer-menu'>
                <Link to='/about'>About WatchIt</Link>
                <Link to='/faq'>FAQ</Link>
                <Link to='/how-to-order'>How To Order</Link>
            </div>
            <div className='footer-menu'>
                <Link to='/privacy'>Privacy Policy</Link>
                <Link to='/terms'>Terms & Conditions</Link>
                <Link to='/return-and-exchange'>Return & Exchange</Link>
                <Link to='/shipping-policy'>Shipping Policy</Link>
            </div>
        </FooterWrap>
    )
}

export default Footer