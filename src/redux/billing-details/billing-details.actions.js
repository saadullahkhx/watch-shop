import { billingDetailsTypes } from "./billing-details.types";

export const placeOrderStart = (orderDetails) => ({
  type: billingDetailsTypes.PLACE_ORDER_START,
  payload: orderDetails,
});

export const placeOrderSuccess = () => ({
  type: billingDetailsTypes.PLACE_ORDER_SUCCESS,
});

export const placeOrderFailure = (errorMessage) => ({
  type: billingDetailsTypes.PLACE_ORDER_FAILURE,
  payload: errorMessage,
});
