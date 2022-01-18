import React from "react";
import "./styles.scss";

const ProductListItem = ({ 
  id, 
  model,
  brand,
  imgUrl, 
  price
}) => {
  return (
    <div className="product-item">
    <figure className="product-item_image">
      <img src={imgUrl} alt={model} />
    </figure>
    <h4 className="product-item_name">{model ? model : "-"}</h4>
    <p className="product-item_brand">{brand ? brand : "-"}</p>
    { price && <p className="product-item_price"> {price} </p> }
  </div>
  );
};

export default ProductListItem;