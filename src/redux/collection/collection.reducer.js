import { collectionActionTypes } from './collection.types';

const INITIAL_STATE = {
  collection: [],
  errorMessage: null,
  isFetching: false,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === collectionActionTypes.FETCH_COLLECTIONS_START) {
    return {
      ...state,
      isFetching: true,
    };
  }
  if (action.type === collectionActionTypes.FETCH_COLLECTIONS_SUCCESS) {
    return {
      ...state,
      collection: action.payload,
      isFetching: false,
    };
  }
  if (action.type === collectionActionTypes.FETCH_COLLECTIONS_FAILURE) {
    return {
      ...state,
      collection: [],
      errorMessage: action.payload,
      isFetching: false,
    };
  } else return state;
};

export default collectionsReducer;
