import http from "../../../infra/http";

export const getProduct = async (productId) => { return await http.get(`/api/product/${productId}`);};

