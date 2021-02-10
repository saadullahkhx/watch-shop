import React from 'react';

import { DetailsWrapper, Details } from './checkout-details.style';
import { connect } from 'react-redux';

const CheckoutDetails = ({ cartItems }) => {
  const total =
    cartItems.length < 1
      ? 0
      : cartItems.reduce((acc, item) => {
          return acc + item.quantity * item.price;
        }, 0);
  const shippingCharges = 0;
  const totalAmount = total + shippingCharges;
  return (
    <DetailsWrapper>
      <h4>CART TOTALS</h4>
      <Details>
        <span className='details-title'>Subtotal:</span>
        <span>PKR. {total}/-</span>
      </Details>
      <Details>
        <span className='details-title'>Shipping:</span>
        <span>{shippingCharges ? shippingCharges : 'Free Shipping'}</span>
      </Details>
      <Details>
        <span className='details-title'>Total:</span>
        <span className='cart-total'>PKR. {totalAmount}/-</span>
      </Details>
    </DetailsWrapper>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CheckoutDetails);
