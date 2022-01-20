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
          <div key={index} className="mb-4 pr-4">
            <div className="mr-4 product-detail_selector">
              <label className="product-detail_selector_label">{entry[1].label}</label>
              <div className="product-detail_selector_input">
                <Select
                  isSearchable={false}
                  onChange={(e) => onInputChange({
                    key: entry[0],
                    value: e.value
                  })}
                  defaultValue={ entry[1].options.length < 2 ? entry[1].options[0] : null}
                  options={entry[1].options}
                  />

               </div> 
            </div>
          </div>
        );
      })}
      <div className="text-center product-detail_button">
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