import React from 'react'
import { HowToOrder } from './how-to-order.styles';

const HowToOrderPage = () => (
    <HowToOrder>
        <h3>HOW TO ORDER?</h3>
        <span>You can order any watch by simply:</span>
        <ul>
            <li>Message us on facebook. (http://www.facebook.com/watchit)</li>
            <li>Message us on Instagram. (http://www.instagram.com/watchit)</li>
            <li>Order via whatsapp: +92 341 3397700</li>
            <li>Through website. Simply add your item to cart and proceed to checkout. Fill the form and you're done!</li>
        </ul>
        <h5>To proceed with your order we will need:</h5>
        <ul>
            <li>Picture of your desired watch.</li>
            <li>Your full name.</li>
            <li>Address to deliver your product.</li>
            <li>Mobile Number</li>
        </ul>
        <h5>Delivery charges?</h5>
        <span>We charge PKR. 200/- for delivery.</span>
    </HowToOrder>
)

export default HowToOrderPage;