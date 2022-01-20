import React from "react";
import { Form } from "react-bootstrap";
import "./styles.scss"

const ProductSearch = ({ onSearchChange }) => {
  const handleOnChange = (value) => { onSearchChange(value); };

  return (
    <div className="product-search">
      <Form>
        <Form.Group controlId="formProductSearch">
          <Form.Control type="text" placeholder="Busca por modelo o marca" onChange={e => handleOnChange(e.target.value)}/>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductSearch;