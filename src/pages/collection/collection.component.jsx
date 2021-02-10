import React from 'react'
import ItemsPreview from '../../components/items-preview/items-preview.component';
import { Route } from 'react-router-dom';
import ViewProductPage from '../product/product.component';

const CollectionPage = () => {
    return (
        <div className='collection-page'>   
            <Route exact path='/pk/collections/:collectionTitle' component={ItemsPreview} />
            <Route path='/pk/collections/:collectionTitle/:productId' component={ViewProductPage} />
        </div>
    )
} 


export default CollectionPage;