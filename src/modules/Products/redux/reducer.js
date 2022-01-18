import { 
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL
} from "./types";

const initialState = {
  items: []
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
  
    default: 
      return state;
  }
}