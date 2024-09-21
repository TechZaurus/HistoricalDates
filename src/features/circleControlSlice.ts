import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CircleItem } from "../components/CircleSelector/CircleSelector";


export interface CircleData {
    titles: Array<CircleTitle>;
    size: number;
}

export interface CircleTitle {
    id: number;
    name: string;
}

interface CircleDataState {
    data: CircleData;
    circleItems: Array<CircleItem>;
    activeIndex: number
}


const initialState : CircleDataState = {data: {titles: [{id: 0, name: "Ошибка"}], size: 1}, circleItems: [], activeIndex: 0}


export const circleControlSlice = createSlice({
    name: "circleControl",
    initialState,
    reducers: {
        setCurrentData(state, action: PayloadAction<CircleData>) {
            state.data = action.payload;
        },
        setCircleItems(state, action: PayloadAction<Array<CircleItem> >) {
            state.circleItems = action.payload;
        },
        setActiveIndex(state, action: PayloadAction<number>) {
            state.activeIndex = action.payload;
        }
    }
})

export const { setCurrentData, setCircleItems, setActiveIndex } = circleControlSlice.actions

export default circleControlSlice.reducer;

