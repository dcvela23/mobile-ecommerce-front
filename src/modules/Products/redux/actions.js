import { 
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
} from "./types";
import { getProducts } from "./../services/getProducts";

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
