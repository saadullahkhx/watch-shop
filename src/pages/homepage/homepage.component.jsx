import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryMenu from '../../components/category-menu/category-menu.component'
import LoadSpinner from '../../components/Spinner/Spinner.component';
import Header from '../../components/header/header.component';

const CategoryMenuWithSpinner = LoadSpinner(CategoryMenu);

const Homepage = ({ collection, isFetching }) => (
    <div className='homepage' style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center' }}>
       <Route path='/' render={() => <CategoryMenuWithSpinner isLoading={isFetching} collection={collection} /> } />
       <Route path='/' component={Header} />
    </div>
)

const mapStateToProps = ({ collections: {collection, isFetching} }) => ({
    collection,
    isFetching
})

export default connect(mapStateToProps)(Homepage);