// react
import React from "react";
import { Routes ,Route } from 'react-router-dom';

// views
import ProductsList from "./views/ProductsList";
import ProductDetail from "./views/ProductDetail";

export const moduleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  );
};

export default moduleRoutes;