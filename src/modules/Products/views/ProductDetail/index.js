import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "./../../redux/actions";
import { addProductToCart } from "./../../../Cart/redux/actions";
import "./styles.scss";
import { useParams } from "react-router-dom";
import ProductDetailImage from "./components/ProductDetailImage";
import ProductDetailDescription from "./components/ProductDetailDescription";
import ProductDetailActions from "./components/ProductDetailActions";

const ProductsDetail = ({
  fetchProduct,
  addProductToCart,
  products
}) => {
  // Get product detail
  const { productId } = useParams();
  useEffect(() => {
    if (!products.detail?.id) { fetchProduct(productId); } 
    else { handleFormDataOnLoad(); }

  }, [fetchProduct, products, productId ]);

  // Cart
  const initialProductState = {
    id: '',
    colorCode: '',
    storageCode: ''
  };
  const [productDetailFormData, setProductDetailFormData] = useState(initialProductState);
  const [cartIsDisabled, setCartIsDisabled] = useState(true);

  const mapPropertyToDto = (key) => {
    let productStateKey;
    switch (key) {
      case "colors":
        productStateKey = "colorCode";
        break;
      case "storages":
        productStateKey = "storageCode";
        break;
      default:
        productStateKey = null;
    }
    return productStateKey;
  };

  const handleInputChange = ({ key, value }) => {
    const stateKey = mapPropertyToDto(key);
    setProductDetailFormData({ ...productDetailFormData, [stateKey]: value });
  };

  const handleFormDataOnLoad = () => {
    const formData = {};
    formData.id = productId;

    // set selects value in case there is only one option
    Object.entries(products.detail.options).forEach((optionsSelect) => {
      if (optionsSelect[1].length === 1) {
        const stateKey = mapPropertyToDto(optionsSelect[0]);
        formData[stateKey] = optionsSelect[1][0].code;
      }
    });
    setProductDetailFormData({ ...productDetailFormData, ...formData });
  };

  const handleCartButtonClick = () => { 
    addProductToCart(productDetailFormData);
  };


  useEffect(() => {
    const handleCartButtonDisable = () => {
      if (Object.values(productDetailFormData).some((property) => property === '')) {
        setCartIsDisabled(true);
      } else {
        setCartIsDisabled(false);
      }
    };
    handleCartButtonDisable();
  }, [productDetailFormData ]);

  return (
    <section className="section products-detail">
      <h1 className="mb-5">{products.detail?.model}</h1>
      <ul className="grid products-list_wrapper">
        {
          products.detail && (
            <div className="grid">
              <div className="grid-col-6">
                <ProductDetailImage url={products.detail.imgUrl} alt={products.detail.model}/>
              </div>
              <div className="grid-col-6">
                <div>
                  {
                    products.detail.id && (
                      <>
                        <ProductDetailDescription productData={products.detail} />
                        <ProductDetailActions
                          cartIsDisabled={cartIsDisabled}
                          productData={products.detail} 
                          onInputChange={handleInputChange}
                          onCartButtonClick={handleCartButtonClick}/>    
                      </>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
      </ul>
    </section>
  );
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  {
    fetchProduct,
    addProductToCart
  }
)(ProductsDetail);