import axios from "axios";

const productsURL =
  "https://online-json-server-api.up.railway.app/project/665eff201d2cd3eb1142aa89/products";

export const customFetch = axios.create({
  baseURL: productsURL,
});

// format price
export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format((price / 100).toFixed(2));

  return dollarAmount;
};
