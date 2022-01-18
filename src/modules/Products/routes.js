// react
import React from "react";
import { Routes ,Route } from 'react-router-dom';

// views
import ProductsList from "./views/ProductsList";

export const moduleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
    </Routes>
  );
};

export default moduleRoutes;