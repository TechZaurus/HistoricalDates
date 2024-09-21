
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterData {
    toTextLeft: string;
    toTextRight: string;
}


interface CounterDataState {
    data: CounterData;
}


const initialState : CounterDataState = {data: {toTextLeft: "2000", toTextRight: "2000"}}


export const counterControlSlice = createSlice({
    name: "counterControl",
    initialState,
    reducers: {
        setCounterData(state, action: PayloadAction<CounterData>) {
            state.data = action.payload;
        }
    }
})

export const { setCounterData } = counterControlSlice.actions

export default counterControlSlice.reducer;