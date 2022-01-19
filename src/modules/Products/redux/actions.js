import { 
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from "./types";
import { getProducts } from "./../services/getProducts";
import { getProduct } from "./../services/getProduct";

export const fetchProducts = () => async dispatch => {
  try {
    const res = await getProducts();
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL
    });
  }
};

export const fetchProduct = (productId) => async dispatch => {
  try {
    const res = await getProduct(productId);
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL
    });
  }
};