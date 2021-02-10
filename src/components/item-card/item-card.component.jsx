import Button from 'react-bootstrap/Button';
import React from 'react'
import { ItemCardWrapper } from './item-card.styles';

const ItemCard = ({ item, history }) => {
    return (
            <ItemCardWrapper>
                <div className='button-and-image'>
                    <img src={item.imageUrl} alt='' />
                </div>
                <div className='title-and-price'>
                    <h4> {item.title} </h4>
                    <span>PKR. {item.price}/-</span>
                    <Button 
                    variant='dark' 
                    onClick={() => history.push(`${history.location.pathname}/${item.title}`)}
                    >
                        View Product
                    </Button>
                </div>
            </ItemCardWrapper>
    )
}



export default ItemCard;