const ProductDetailDescription = ({ productData }) => {
  const checkValue = (value) => !value ? "-" : value;
  const descriptionValues = {
    brand: checkValue(productData.brand),
    model: checkValue(productData.model),
    price: checkValue(productData.price),
    cpu: checkValue(productData.cpu),
    ram: checkValue(productData.ram),
    os: checkValue(productData.os),
    displayResolution: checkValue(productData.displayResolution),
    battery: checkValue(productData.battery),
    primaryCamera: checkValue(productData.primaryCamera),
    secondaryCamera: checkValue(productData.secondaryCmera),
    weight: checkValue(productData.weight)
  };

  return (
    <div className="product-detail_decription grid">
      { Object.entries(descriptionValues).map((value, index) => {
        return (
          <div key={index} className="mb-2 grid-col-6">
            <label>{value[0]}</label>
            <p>{value[1]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetailDescription;