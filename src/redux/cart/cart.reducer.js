import { cartActionTypes } from "./cart.types";
import { addItem, removeItem } from "./cart.utils";
import { billingDetailsTypes } from "../billing-details/billing-details.types";

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === cartActionTypes.ADD_ITEM_TO_CART) {
    return {
      ...state,
      cartItems: addItem(state.cartItems, action.payload),
    };
  }
  if (action.type === billingDetailsTypes.PLACE_ORDER_SUCCESS) {
    return {
      ...state,
      cartItems: [],
    };
  }
  if (action.type === cartActionTypes.REMOVE_ITEM_TO_CART) {
    return {
      ...state,
      cartItems: removeItem(state.cartItems, action.payload),
    };
  } else return state;
};

export default cartReducer;
