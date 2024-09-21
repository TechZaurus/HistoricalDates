
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SectionSwiperData {
    leftButtonVisible: boolean;
    rightButtonVisible: boolean;
    activeIndex: number;
}


interface SectionSwiperDataState {
    data: SectionSwiperData;
}


const initialState : SectionSwiperDataState = {data: {leftButtonVisible: false, rightButtonVisible: true, activeIndex: 0}}


export const swiperControlSlice = createSlice({
    name: "swiperControl",
    initialState,
    reducers: {
        setSwiperData(state, action: PayloadAction<SectionSwiperData>) {
            state.data = action.payload;
        }
    }
})

export const { setSwiperData } = swiperControlSlice.actions

export default swiperControlSlice.reducer;