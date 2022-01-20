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
    { price && (
      <div className="product-item_price">
        <p className="product-item_price_label"> Precio: </p>
        <p className="product-item_price_amount"> {price} €</p>
      </div>
    ) }
  </div>
  );
};

export default ProductListItem;