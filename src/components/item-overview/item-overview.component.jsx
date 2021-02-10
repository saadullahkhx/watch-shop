import React from 'react';
import { ItemOverviewWrapper } from './item-overview.styles';
import Button from 'react-bootstrap/Button';
import { NotificationManager } from 'react-notifications';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ItemOverview = (props) => {
  const { item, addItemToCart } = props;
  const handleClick = () => {
    addItemToCart(item);
    NotificationManager.success('Added To Cart', 'Success!', 1000);
  };

  return (
    <ItemOverviewWrapper>
      <div className='item-details'>
        <img src={item.imageUrl} alt='' />
        <div className='item-description'>
          <h3>{item.title}</h3>
          <span>Brand: {item.brand} </span>
          <span>Model: {item.model} </span>
          <span>Price: PKR. {item.price}/-</span>
          {item.description.map((line, idx) => (
            <span key={idx}>
              - {line}
              <br />
            </span>
          ))}
          <div className='buttons'>
            <Button variant='dark' onClick={() => handleClick()}>
              ADD TO CART
            </Button>
            <Link to='/cart'>
              <Button variant='outline-dark'>VIEW CART</Button>
            </Link>
          </div>
        </div>
      </div>
    </ItemOverviewWrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(ItemOverview);
