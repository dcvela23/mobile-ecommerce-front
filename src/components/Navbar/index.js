import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStorageUserCart } from "./../../infra/settings";
import { POST_PRODUCT_TO_CART_SUCCESS } from "./../../modules/Cart/redux/types";
import store from "./../../redux/store";
import {ReactComponent as Logo} from './assets/logo.svg';
import {ReactComponent as Cart} from './assets/cart.svg';
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
      <div className="nav_bar">
        <nav>
          <ul className="nav_bar_links">
            <li className="nav-logo">
              <Link to="/">
                <Logo />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="nav_cart">
          { cart.products && (
            <div className="nav_cart_wrapper">
              <Cart />
              <div className="nav_cart_amount">
                <p>{ cart.products.count }</p>
              </div>
            </div>
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