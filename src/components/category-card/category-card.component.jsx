import React from 'react'
import { Link } from 'react-router-dom';
import { Card} from './category-card.styles';

const CategoryCard = ({ category }) => (
    <Card>
        <Link to={`pk/collections/${category.routeName}`}>
            <img src={category.imageUrl} alt='' />
        </Link>
    </Card>
)

export default CategoryCard;