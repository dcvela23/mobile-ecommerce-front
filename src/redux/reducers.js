import { combineReducers } from "redux";
import loader from "./loader/reducer";
import products from "./../modules/Products/redux/reducer";
import cart from "./../modules/Cart/redux/reducer";

export default combineReducers({
  loader,
  products,
  cart
});