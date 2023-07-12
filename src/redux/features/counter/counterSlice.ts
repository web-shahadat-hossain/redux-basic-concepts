import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICount {
  count: number;
}

const initialState: ICount = {
  count: 0,
};

const courterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = courterSlice.actions;

export default courterSlice.reducer;
