import { configureStore, createSlice  } from "@reduxjs/toolkit";



const counterSlice = createSlice({

    name: "counter",
    initialState: {
        value: 0,
        name: "achi",
    },
    reducer: {

        increment: (state) => {},
        decrement: (state) => {},
    },
});

export let { increment, decrement } = counterSlice.actions;

export let  store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});