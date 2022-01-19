import { 
  POST_PRODUCT_TO_CART_SUCCESS,
  POST_PRODUCT_TO_CART_FAIL
} from "./types";
const initialState = {
  products: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case POST_PRODUCT_TO_CART_SUCCESS:
      return {
        products: payload,
      };
  
    case POST_PRODUCT_TO_CART_FAIL:
      return {
        products: {}
      };  
  
    default: 
      return state;
  }
}