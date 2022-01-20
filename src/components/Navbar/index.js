import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStorageUserCart } from "./../../infra/settings";
import { POST_PRODUCT_TO_CART_SUCCESS } from "./../../modules/Cart/redux/types";
import store from "./../../redux/store";
import "./styles.scss";

const getStorageCartData = () => {
  const storageUserCart = getStorageUserCart();
  store.dispatch({
    type: POST_PRODUCT_TO_CART_SUCCESS,
    payload: storageUserCart
  });
};

getStorageCartData();

export const Navbar = ({ cart }) => {

  return (
    <div className="nav">
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <div className="nav_cart">
          { cart.products && (
            <p>{ cart.products.count }</p>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  null
)(Navbar);