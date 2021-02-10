import { billingDetailsTypes } from "./billing-details.types";

const INITIAL_STATE = {
  orderDetails: null,
  errorMessage: null,
};

const billingDetailsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === billingDetailsTypes.PLACE_ORDER_FAILURE) {
    return {
      orderDetails: null,
      errorMessage: action.payload,
    };
  } else return state;
};

export default billingDetailsReducer;
