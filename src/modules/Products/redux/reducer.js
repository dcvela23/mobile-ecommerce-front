import { 
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL
} from "./types";

const initialState = {
  items: [],
  detail: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        items: payload,
      };

    case GET_PRODUCTS_FAIL:
      return {
        items: []
      };

    case GET_PRODUCT_SUCCESS:
      return {
        detail: payload,
      };
  
    case GET_PRODUCT_FAIL:
      return {
        detail: {}
      };  
  
    default: 
      return state;
  }
}