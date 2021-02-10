import React from 'react'
import { connect } from 'react-redux'
import ItemOverview from '../../components/item-overview/item-overview.component';
import { ItemPage } from './product.styles';

const ViewProductPage = ({ match: { params }, collection }) => {
    return (
        <ItemPage>
            {
                collection.map(category => category.items.map(
                    (item, idx) => 
                    item.title === params.productId ? 
                    <ItemOverview item={item} key={idx} /> : null
                ))
            }
        </ItemPage>
    )
}

const mapStateToProps = ({ collections: { collection } }) => ({
    collection
})

export default connect(mapStateToProps)(ViewProductPage);

