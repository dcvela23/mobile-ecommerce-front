// http middleware
import http from "../../../infra/http";

export const getProducts = async () => { return await http.get("/api/product");};
