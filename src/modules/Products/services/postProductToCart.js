import http from "../../../infra/http";

export const postProductToCart = async ({id, colorCode, storageCode}) => { 
  return await http.post('/api/cart', {
    id,
    colorCode,
    storageCode
  });
};

