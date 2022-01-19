import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  fetchProducts
} from "./../../redux/actions";
import { Link } from 'react-router-dom';
import ProductListItem from './components/ProductListItem';
import ProductListSearch from './components/ProductSearch';
import "./styles.scss";

const ProductsList = ( {
  fetchProducts,
  products
}) => {
  useEffect(() => {
    if (!products.items?.length) { fetchProducts(); }
    setDisplayedProducts(products.items);
  }, [fetchProducts, products]);

  const [displayedProducts, setDisplayedProducts] = useState([]);
  const handleSearchChange = (searchValue) => {
    const valueTolowerCase = searchValue.toLowerCase();
    const filteredValues = products.items.filter((product) => {
      return product.model.toLowerCase().includes(valueTolowerCase) || product.brand.toLowerCase().includes(valueTolowerCase);
    });
    setDisplayedProducts(filteredValues);
  };
  
  return (
    <section className="section products-list">
      <h1 className="mb-5">Product List</h1>
      <div className="mb-5 text-right">
        <ProductListSearch onSearchChange={handleSearchChange}/>
      </div>
      <ul className="grid products-list_wrapper">
      { displayedProducts?.length > 0 && displayedProducts.map((product, index) => {
        return (
          <li key={index} className="grid-col-3">
             <Link to={`/product/${product.id}`}>
                <ProductListItem 
                  id={product.id}
                  model={product.model}
                  brand={product.brand}
                  imgUrl={product.imgUrl}
                  price={product.price}
                />
              </Link>
          </li>
        );
      })}
 
      </ul>
    </section>
  );
};

ProductsList.propTypes = {
  products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  {
    fetchProducts
  }
)(ProductsList);