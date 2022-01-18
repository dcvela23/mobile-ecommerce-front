import { 
  SHOW_LOADER,
  HIDE_LOADER
} from "./types";

export const showLoader = () => async dispatch => {
  dispatch({
    type: SHOW_LOADER
  });
};

export const hideLoader = () => async dispatch => {
  dispatch({
    type: HIDE_LOADER
  });
};
