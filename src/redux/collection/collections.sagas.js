import { takeLatest, all, put, call } from "redux-saga/effects";
import { collectionActionTypes } from "./collection.types";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./collection.actions";

import { firestore } from "../../firebase/firebase";

export function* onFetchCollectionsStart() {
  try {
    const collectionRef = yield firestore.collection("collections");
    const onSnapshot = yield collectionRef.get();
    yield put(
      fetchCollectionsSuccess(onSnapshot.docs.map((doc) => doc.data()))
    );
  } catch (e) {
    yield put(fetchCollectionsFailure(e.message));
  }
}

export function* watchFetchCollectionsStart() {
  yield takeLatest(
    collectionActionTypes.FETCH_COLLECTIONS_START,
    onFetchCollectionsStart
  );
}

export function* collectionSagas() {
  yield all([call(watchFetchCollectionsStart)]);
}
