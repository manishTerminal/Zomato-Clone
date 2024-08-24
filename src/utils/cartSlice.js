import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items.pop(action.payload);
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].card.info.id === action.payload) {
          state.items.splice(i, 1);
        }
      }
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
