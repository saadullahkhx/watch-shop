import Button from 'react-bootstrap/Button';
import React from 'react';
import { HeaderWrapper } from './header.styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ collection, history }) => {
  console.log(history);
  return (
    <HeaderWrapper>
      <h3>New Additions</h3>
      {collection.map((category) =>
        category.items.map((item, idx) =>
          idx === category.items.length - 1 ? (
            <div className='header-content' key={idx}>
              <img
                src={item.imageUrl}
                alt=''
                style={{ width: '300px', height: '300px' }}
              />
              <div className='main-content'>
                <h3> {item.title} </h3>
                <span> {item.description} </span>
                <Link
                  to={`/pk/collections/${category.routeName}/${item.title}`}
                >
                  <Button variant='dark'>View Product</Button>
                </Link>
              </div>
            </div>
          ) : (
            ''
          )
        )
      )}
    </HeaderWrapper>
  );
};

const mapStateToProps = ({ collections: { collection } }) => ({
  collection,
});

export default connect(mapStateToProps)(Header);
