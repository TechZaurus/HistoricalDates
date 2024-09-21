import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PagerData {
    currentPage: number,
    totalPages: number
}


interface PagerDataState {
    data: PagerData;
}


const initialState : PagerDataState = {data: {currentPage: 1, totalPages: 2}}


export const pagerControlSlice = createSlice({
    name: "pagerControl",
    initialState,
    reducers: {
        setPagerData(state, action: PayloadAction<PagerData>) {
            state.data = action.payload;
        }
    }
})

export const { setPagerData } = pagerControlSlice.actions

export default pagerControlSlice.reducer;