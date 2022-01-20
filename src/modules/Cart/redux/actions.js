import { 
  POST_PRODUCT_TO_CART_SUCCESS,
  POST_PRODUCT_TO_CART_FAIL
} from "./types";
import { postCart } from "../services/postCart";
import { setStorageUserCart } from "./../../../infra/settings";

export const addProductToCart = (productData) => async dispatch => {
  try {
    const res = await postCart(productData);
    const { data: cart } = res;

    dispatch({
      type: POST_PRODUCT_TO_CART_SUCCESS,
      payload: cart
    });
    setStorageUserCart(cart);
  } catch (error) {
    dispatch({
      type: POST_PRODUCT_TO_CART_FAIL
    });
  }
};