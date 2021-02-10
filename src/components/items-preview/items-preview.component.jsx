import React from 'react';
import { ItemsPreviewWrapper } from './items.preview.styles';
import { connect } from 'react-redux';
import ItemCard from '../item-card/item-card.component';

const ItemsPreview = (props) => {
  const [inputValue, setInputValue] = React.useState('');
  const { collection, params, history } = props;
  return (
    <ItemsPreviewWrapper>
      <input
        name='inputValue'
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder='search watches'
      />
      <div className='item-preview-menu'>
        {inputValue
          ? collection.map((category) =>
              category.routeName === params.collectionTitle
                ? category.items
                    .filter((item) =>
                      item.title
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                    .map((filteredItem, idx) => (
                      <ItemCard
                        item={filteredItem}
                        key={idx}
                        collectionUrlParam={params.collectionTitle}
                        history={history}
                      />
                    ))
                : null
            )
          : collection.map((category) =>
              category.routeName === params.collectionTitle
                ? category.items.map((item, idx) => (
                    <ItemCard
                      item={item}
                      key={idx}
                      collectionUrlParam={params.collectionTitle}
                      history={history}
                    />
                  ))
                : null
            )}
      </div>
    </ItemsPreviewWrapper>
  );
};

const mapStateToProps = ({ collections: { collection } }, ownProps) => ({
  collection,
  params: ownProps.match.params,
  history: ownProps.history,
});

export default connect(mapStateToProps)(ItemsPreview);
