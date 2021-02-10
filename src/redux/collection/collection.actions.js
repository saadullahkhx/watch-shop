import { collectionActionTypes } from "./collection.types";

export const fetchCollectionsStart = () => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collection) => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collection,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});
