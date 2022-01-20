import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  fetchProducts
} from "./../../redux/actions";
import { Link } from 'react-router-dom';
import ProductListItem from './components/ProductListItem';
import ProductListSearch from './components/ProductSearch';
import Loader from "./../../../../components/Loader";
import { GET_PRODUCTS_SUCCESS } from "./../../redux/types";
import { getStorageProductList } from "./../../../../infra/settings";
import store from "./../../../../redux/store";
import "./styles.scss";

const ProductsList = ( {
  fetchProducts,
  products
}) => {
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);

  useEffect(() => {
    if (!products.items?.length) { 
      const storageProductList = getStorageProductList();

      if (storageProductList) {
        store.dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: storageProductList
        });      
      } else {
        fetchProducts(); 
      }
    } else {
      setDisplayedProducts(products.items);
      setTimeout(() => { setLoaderIsVisible(false);}, 100);
    }
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
      <Loader isVisible={loaderIsVisible}/>
      <h1 className="mb-5 color-primary">Catálogo de móviles</h1>
      <div className="mb-5 text-right">
        <ProductListSearch onSearchChange={handleSearchChange}/>
      </div>
      <ul className="products-list_wrapper">
      { displayedProducts?.length > 0 
        ? 
          displayedProducts.map((product, index) => {
          return (
            <li key={index} >
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
        })
        :
        (
          <div className="products-list_empty">
            <p>No tenemos níngun dispositivo con esa referencia :O</p>
          </div>
        )
      }
 
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