import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from "./modules/Products";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
};

export default App;