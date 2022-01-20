import { 
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from "./types";
import { getProducts } from "./../services/getProducts";
import { getProduct } from "./../services/getProduct";
import { setStorageProductList, setStorageProductDetailList } from "./../../../infra/settings";

export const fetchProducts = () => async dispatch => {
  try {
    const res = await getProducts();
    const { data: products } = res;

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: products
    });
    setStorageProductList(products);
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL
    });
  }
};

export const fetchProduct = (productId) => async dispatch => {
  try {
    const res = await getProduct(productId);
    const { data: product } = res;

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: product
    });
    setStorageProductDetailList(product);
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAIL
    });
  }
};