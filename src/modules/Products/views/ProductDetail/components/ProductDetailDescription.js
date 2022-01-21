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

  const setDescriptionLiteral = (descriptionKey) => {
    let desccriptionLiteral;
    switch(descriptionKey) {
      case "brand":
        desccriptionLiteral = "Marca";
        break;
      case "model":
        desccriptionLiteral = "Modelo";
        break;
      case "price":
        desccriptionLiteral = "Precio";
        break;
      case "cpu":
        desccriptionLiteral = "CPU";
        break;
      case "ram":
        desccriptionLiteral = "RAM";
        break;
      case "os":
        desccriptionLiteral = "Sistema operativo";
        break;
      case "displayResolution":
        desccriptionLiteral = "Resolución de pantalla";
        break;
      case "battery":
        desccriptionLiteral = "Batería";
        break;
      case "primaryCamera":
        desccriptionLiteral = "Cámara principal";
        break;
      case "secondaryCamera":
        desccriptionLiteral = "Cámara secundaria";
        break;
      case "weight":
        desccriptionLiteral=  "Peso";
          break;
      default:
        desccriptionLiteral = "-";    
      }
    return desccriptionLiteral;
  };

  return (
    <div className="product-detail_decription">
      { Object.entries(descriptionValues).map((value, index) => {
        return (
          <div key={index}>
            <label className="product-detail_decription_label">{setDescriptionLiteral(value[0])}</label>
            <p className="product-detail_decription_text">{value[1]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetailDescription;