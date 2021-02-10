import { takeLatest, put, all, call } from 'redux-saga/effects';
import { billingDetailsTypes } from './billing-details.types';
import {
  placeOrderSuccess,
  placeOrderFailure,
} from './billing-details.actions';

import { firestore } from '../../firebase/firebase';

export function* onPlaceOrderStart({ payload }) {
  try {
    const ordersCollection = firestore.collection('orders');
    const newDoc = yield ordersCollection.doc();
    yield newDoc.set({ id: newDoc.id, ...payload });
    yield put(placeOrderSuccess());
  } catch (e) {
    yield put(placeOrderFailure(e.message));
  }
}

export function* onPlaceOrderSuccess() {
  yield alert('Order placed successfully!');
}

export function* watchPlaceOrderStart() {
  yield takeLatest(billingDetailsTypes.PLACE_ORDER_START, onPlaceOrderStart);
}

export function* watchPlaceOrderSuccess() {
  yield takeLatest(
    billingDetailsTypes.PLACE_ORDER_SUCCESS,
    onPlaceOrderSuccess
  );
}

export function* billingDetailsSagas() {
  yield all([call(watchPlaceOrderStart), call(watchPlaceOrderSuccess)]);
}
