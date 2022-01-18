import { combineReducers } from "redux";
import loader from "./loader/reducer";
import products from "./../modules/Products/redux/reducer";

export default combineReducers({
  loader,
  products
});