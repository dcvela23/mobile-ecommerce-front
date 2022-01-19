import http from "../../../infra/http";

export const postCart = async ({id, colorCode, storageCode}) => { 
  return await http.post('/api/cart', {
    id,
    colorCode,
    storageCode
  });
};

