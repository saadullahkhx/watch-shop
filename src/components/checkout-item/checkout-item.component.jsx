import React from 'react'

import { ItemWrapper, ItemDetails } from './checkout-item.styles';
import { FaGreaterThan as Increase } from 'react-icons/fa';
import { FaLessThan as Decrease } from 'react-icons/fa';
import { addItemToCart, removeItemFromCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, addItemToCart, removeItemFromCart }) => {
    const { title, price, quantity, imageUrl } = item;
    return (
        <ItemWrapper>
            <div className='image-title-close'>
                <span>X</span>
                <img src={imageUrl} alt='' />
                <span>{title}</span>
            </div>
            <ItemDetails>
                    <span className='hidden'> {price} </span>
                    <span className='quantity'> <Decrease style={{ cursor: 'pointer' }} onClick={() => removeItemFromCart(item)} /> {quantity} <Increase style={{ cursor: 'pointer' }} onClick={() => addItemToCart(item)} /> </span>
                    <span className='hidden'> {price * quantity} </span>
            </ItemDetails>
        </ItemWrapper>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (item) => dispatch(addItemToCart(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);