import React from "react";
import { Spinner } from "react-bootstrap";
import "./styles.scss";

export const Loader = ({ isVisible }) => {
  return (
    <div className={`loader ${isVisible ? "is-visible" : ""}`}>
      <Spinner animation="border" role="status" />
    </div>

  );
};

export default Loader;