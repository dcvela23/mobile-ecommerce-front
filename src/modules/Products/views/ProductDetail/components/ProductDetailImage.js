const ProductDetailImage = ({ 
  url,
  alt
}) => {
  return (
    <figure className="product-detail_image">
      <img src={url} alt={alt} />
    </figure>
  );
};

export default ProductDetailImage;