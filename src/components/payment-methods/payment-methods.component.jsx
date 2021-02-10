import React from 'react';
import { Link } from 'react-router-dom';
import { Payments } from './payment-methods.styles';
 

const PaymentMethods = () => {
    return (
        <Payments>
            <h5>Cash On Delivery</h5>
            <span>Pay with cash on delivery.</span>
            <span> Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to='/privacy'>privacy policy</Link>.</span>
        </Payments>
    )
}

export default PaymentMethods;