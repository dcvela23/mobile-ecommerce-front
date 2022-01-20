import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStorageUserCart } from "./../../infra/settings";
import { POST_PRODUCT_TO_CART_SUCCESS } from "./../../modules/Cart/redux/types";
import store from "./../../redux/store";
import {ReactComponent as Logo} from './assets/logo.svg';
import {ReactComponent as Cart} from './assets/cart.svg';
import BreadCrumb from "../Breadcrumb";
import { useLocation } from 'react-router-dom';
import "./styles.scss";

const getStorageCartData = () => {
  const storageUserCart = getStorageUserCart();
  store.dispatch({
    type: POST_PRODUCT_TO_CART_SUCCESS,
    payload: storageUserCart
  });
};

getStorageCartData();

export const Navbar = ({ cart, products }) => {
  const location = useLocation();
  const [breadcrumbLinks, setBreadcrumbLinks] = useState([]);
  const handleBreadcrumbLinks = (location) => {
    if (!location) return [];

    const links = [];
    const homeData = {
      path: "/",
      literal: "Inicio"
    }; 

    if (location.pathname === "/") {
      links.push(homeData);
    } else if (location.pathname.includes("/product/") && products.detail) {
      links.push(homeData);
      links.push({
        path: `/product/${products.detail.id}`,
        literal: `Detalle ${products.detail.model}`,
      });
    }
    setBreadcrumbLinks(links);
  };

  useEffect(() => {
    // runs on location, i.e. route, change
    handleBreadcrumbLinks(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, products]);

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
        <BreadCrumb links={breadcrumbLinks}/>

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
  cart: state.cart,
  products: state.products
});

export default connect(
  mapStateToProps,
  null
)(Navbar);