import { 
  POST_PRODUCT_TO_CART_SUCCESS,
  POST_PRODUCT_TO_CART_FAIL
} from "./types";
import { postCart } from "../services/postCart";

export const addProductToCart = (productData) => async dispatch => {
  try {
    const res = await postCart(productData);
    dispatch({
      type: POST_PRODUCT_TO_CART_SUCCESS,
      payload: res.data
    });

  } catch (error) {
    dispatch({
      type: POST_PRODUCT_TO_CART_FAIL
    });
  }
};