import React from 'react';
import { MenuWrapper } from './category-menu.styles';
import { connect } from 'react-redux';
import CategoryCard from '../category-card/category-card.component';

const CategoryMenu = ({ collection }) => (
  <MenuWrapper>
    {collection.map((category) => (
      <CategoryCard key={category.id} category={category} />
    ))}
  </MenuWrapper>
);

const mapStateToProps = ({ collections: { collection } }) => ({
  collection,
});

export default connect(mapStateToProps)(CategoryMenu);
