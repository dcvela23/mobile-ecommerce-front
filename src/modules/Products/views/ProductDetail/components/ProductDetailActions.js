import Select from "react-select";
import { Button } from "react-bootstrap";

const ProductDetailActions = ({ productData, onCartButtonClick, onInputChange, cartIsDisabled }) => {
  const mapOptionsArray = (optionsArray) => {
    return optionsArray.map((option) => {
      return {
        value: option.code,
        label: option.name
      };
    });
  };

  const optionsSelectors = {
    storages: {
      label: "Almacenamiento",
      options: mapOptionsArray(productData.options?.storages),
    },
    colors: {
      label: "Colors",
      options: mapOptionsArray(productData.options?.colors),
    }
  };

  return (
    <div className="product-detail_actions grid">
      { Object.entries(optionsSelectors).map((entry, index) => {
        return (
          <div key={index} className="mb-4 pr-4 grid-col-6">
            <div className="mr-4">
              <label>{entry[1].label}</label>
              <Select 
                onChange={(e) => onInputChange({
                  key: entry[0],
                  value: e.value
                })}
                defaultValue={ entry[1].options.length < 2 ? entry[1].options[0] : null}
                options={entry[1].options}
                />
            </div>
          </div>
        );
      })}
      <div className="grid-col-12 text-center">
        <Button 
          variant="primary" 
          onClick={onCartButtonClick}
          disabled={cartIsDisabled}
          >Añadir al carro</Button>
      </div>
    </div>
  );
};

export default ProductDetailActions;