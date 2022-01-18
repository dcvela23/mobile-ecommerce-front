import { 
  SHOW_LOADER,
  HIDE_LOADER
} from "./types";

const initialState = {
  isVisible: true
};

export default (state = initialState, action) => {
  const { type } = action;

  switch(type) {
    case SHOW_LOADER:
      return {
        isVisible: true
      };

    case HIDE_LOADER:
      return {
        isVisible: false
      };
  
    default: 
      return state;
  }
};