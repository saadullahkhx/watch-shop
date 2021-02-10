import { all, call } from "redux-saga/effects";
import { collectionSagas } from "./collection/collections.sagas";
import { billingDetailsSagas } from "./billing-details/billing-details.sagas";

export function* rootSagas() {
  yield all([call(collectionSagas), call(billingDetailsSagas)]);
}
