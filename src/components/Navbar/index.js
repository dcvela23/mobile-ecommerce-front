import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.scss";

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