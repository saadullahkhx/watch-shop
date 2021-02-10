import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import collectionsReducer from "./collection/collection.reducer";
import cartReducer from "./cart/cart.reducer";
import billingDetailsReducer from "./billing-details/billing-details.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["collections", "cart"],
};

const rootReducer = combineReducers({
  collections: collectionsReducer,
  cart: cartReducer,
  orderDetails: billingDetailsReducer,
});

export default persistReducer(persistConfig, rootReducer);
