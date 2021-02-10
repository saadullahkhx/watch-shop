import React from 'react'
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { ShoppingCartWrap, HeaderBlock, HeaderBlock2 } from './shopping-cart.styles';


const ShoppingCart = ({ cartItems }) => {
    return (
        <ShoppingCartWrap>
            <h4>SHOPPING CART</h4>
            <HeaderBlock>
                <div className='heading product'>
                    <h5>Product</h5>
                </div>
                <HeaderBlock2>
                    <div className='heading price'>
                        <h5>Price</h5>
                    </div>
                    <div className='heading quantity'>
                        <h5>Quantity</h5>
                    </div>
                    <div className='heading total'>
                        <h5>Total</h5>
                    </div>
                </HeaderBlock2>
            </HeaderBlock>
            {   
                (cartItems.length < 1) ?
                <span>Your cart is empty.</span>
                :
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
            }
        </ShoppingCartWrap>
    )
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(ShoppingCart);