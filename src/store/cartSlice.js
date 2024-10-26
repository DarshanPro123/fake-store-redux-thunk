import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [], // The cart array is here, not items
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            // Find the product in the cart array
            const existingProduct = state.cart.find((item) => item.id === product.id);

            if (existingProduct) {
                // If the product is already in the cart, increase its quantity
                existingProduct.quantity += 1;
            } else {
                // If the product is not in the cart, add it with a quantity of 1
                state.cart.push({ ...product, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            // Filter out the product from the cart based on the id
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        clearCart: (state) => {
            // Clear all items from the cart
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
