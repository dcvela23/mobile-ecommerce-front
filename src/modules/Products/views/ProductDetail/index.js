import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "./../../redux/actions";
import { addProductToCart } from "./../../../Cart/redux/actions";
import "./styles.scss";
import { useParams } from "react-router-dom";
import ProductDetailImage from "./components/ProductDetailImage";
import ProductDetailDescription from "./components/ProductDetailDescription";
import ProductDetailActions from "./components/ProductDetailActions";
import Loader from "./../../../../components/Loader";
import { GET_PRODUCT_SUCCESS } from "./../../redux/types";
import { getStorageProductDetailList } from "./../../../../infra/settings";
import store from "./../../../../redux/store";
import { useNavigate } from "react-router-dom";


const ProductsDetail = ({
  fetchProduct,
  addProductToCart,
  products
}) => {
  const [loaderIsVisible, setLoaderIsVisible] = useState(true);
  const { productId } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    if (!products.detail?.id) {
      const storageProductDetailList = getStorageProductDetailList();
      const productDetail = storageProductDetailList?.filter((product) => product.id === productId);
      if (productDetail && productDetail[0]) {
        store.dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: productDetail[0]
        });      
      } else {
        fetchProduct(productId, navigate); 
      }
    } else { 
      handleFormDataOnLoad(); 
      setTimeout(() => { setLoaderIsVisible(false);}, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <section className="section product-detail">
      <Loader isVisible={loaderIsVisible}/>
      {
        products.detail && (
          <div className="product-detail_wrapper">
            <div>
              <ProductDetailImage url={products.detail.imgUrl} alt={products.detail.model}/>
            </div>
            <div>
              <div className="product-detail_data">
                <h1 className="mb-5">{products.detail?.model}</h1>
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
          </div>
        )
      }
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