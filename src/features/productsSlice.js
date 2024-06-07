import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

const initialState = loadState() || {
  amount: 0,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { slug, price, amount, image } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.slug === slug
      );

      if (existingProduct) {
        existingProduct.amount += amount;
      } else {
        state.products.push({ slug, price, amount, image });
        state.amount += amount;
      }

      // Save state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeProduct: (state, action) => {
      const slug = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.slug === slug
      );

      if (productIndex !== -1) {
        state.amount -= state.products[productIndex].amount;
        state.products.splice(productIndex, 1);
      }

      // Save state to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.amount = 0;
      state.products = [];

      // Clear cart from localStorage
      localStorage.removeItem("cart");
    },
    updateProductAmount: (state, action) => {
      const { slug, amount } = action.payload;
      const product = state.products.find((product) => product.slug === slug);

      if (product) {
        state.amount += amount - product.amount; // Update total amount
        product.amount = amount;

        // Save state to localStorage
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const { addProduct, removeProduct, clearCart, updateProductAmount } =
  productsSlice.actions;
export default productsSlice.reducer;
