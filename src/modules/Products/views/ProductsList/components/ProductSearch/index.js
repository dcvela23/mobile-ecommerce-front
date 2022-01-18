import React from "react";
import { Form } from "react-bootstrap";

const ProductSearch = ({ onSearchChange }) => {
  const handleOnChange = (value) => { onSearchChange(value); };

  return (
    <Form>
      <Form.Group controlId="formProductSearch">
        <Form.Control type="text" placeholder="Search mobile" onChange={e => handleOnChange(e.target.value)}/>
      </Form.Group>
    </Form>
  );
};

export default ProductSearch;