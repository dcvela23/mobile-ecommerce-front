import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from "./modules/Products";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
          <Fragment>
            <Routes>
              <Route path="*" element={<Products />} />
            </Routes>
        </Fragment>
      </Provider>
    </BrowserRouter>

  );
};

export default App;