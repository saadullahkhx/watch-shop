import React from 'react'
import ShoppingCart from '../../components/shopping-cart/shopping-cart.component';
import { CartPageWrap } from './cart.styles'
import CheckoutDetails from '../../components/checkout-details/checkout-details.component';
import { Link, Route, Redirect } from 'react-router-dom';
import CheckoutPage from '../checkout/checkout.component';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

const Cart = ({ cartItems }) => {
    return (
        <CartPageWrap>
            <Route exact path='/cart' component={ShoppingCart} />
            <Route exact path='/cart' component={CheckoutDetails} />
            {
                cartItems.length < 1 ?
                <div className='empty-cart-message'>
                    <span>Add some items to proceed to checkout.</span>
                </div>
                :
                <Route exact path='/cart' render={() => <Link to='/cart/checkout'>
                <Button>PROCEED TO CHECKOUT</Button>
                </Link>} />
            }
            <Route path='/cart/checkout' render={() => (cartItems.length < 1) ? <Redirect to='/' /> : <CheckoutPage />} />
        </CartPageWrap>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(Cart);