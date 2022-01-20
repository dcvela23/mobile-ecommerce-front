export const getItem = (key, defaultValue = null) => {    
  const storageKey = `__settings_${key}__`;
  const object = JSON.parse(localStorage.getItem(storageKey));

  if (object!= null) {
    const localStorageValue = object.value;
    const dateString = object.timestamp;
    const now = new Date().getTime().toString();
    const differenceInMinutes = (now - dateString)/1000/60;
    const expirationMinutes = 60;

    if (differenceInMinutes > expirationMinutes) {
      return defaultValue;
    } else {
      return localStorageValue;
    }
  }
  return defaultValue;
};

const setItem = (key, value) => {
  const storageKey = `__settings_${key}__`;
  const object = {
    value, 
    timestamp: new Date().getTime()
  };
  return localStorage.setItem(storageKey, JSON.stringify(object));
};

export const setStorageUserCart = (data = {}) => setItem("userCart", data);
export const getStorageUserCart = () => getItem("userCart");
export const setStorageProductList = (data = {}) => setItem("productList", data);
export const getStorageProductList = () => getItem("productList");
export const setStorageProductDetailList = (data = {}) => {
  let productDetailList = [];
  const currentProductDetailList = getItem("productDetailList");
  if (currentProductDetailList) {
    const productIsInStorage = currentProductDetailList.some((product) => product.id === data.id);
    productDetailList = [ ...currentProductDetailList];
    if (!productIsInStorage) productDetailList.push(data);
  }
  setItem("productDetailList", productDetailList, data); 
};
export const getStorageProductDetailList = () => getItem("productDetailList");
