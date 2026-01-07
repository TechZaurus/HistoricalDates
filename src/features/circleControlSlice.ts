import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SerializableCircleItem {
  id: number;
  angle: number;
  label: string;
}

export interface CircleTitle {
  id: number;
  name: string;
}

interface CircleDataState {
  activeIndex: number;
}

const initialState: CircleDataState = { activeIndex: 0 };

export const circleControlSlice = createSlice({
  name: "circleControl",
  initialState,
  reducers: {
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = circleControlSlice.actions;

export default circleControlSlice.reducer;
