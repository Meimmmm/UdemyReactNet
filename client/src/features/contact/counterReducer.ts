import { createSlice } from "@reduxjs/toolkit";

//CounterState は、カウンターの状態を表す型
export type CounterState = {
    data: number
}

//Initial State (初期状態) の定義
const initialState: CounterState = {
    data: 42
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState, 
    reducers: {
        increment: (state, action) => {
            state.data += action.payload
        },
        decrement: (state, action) => {
            state.data -= action.payload
        }
    }
})

export const {increment, decrement} = counterSlice.actions;



//Action Creator (アクションクリエイター) の定義。初期値は1
export function incrementLegacy(amount = 1) {
    return {
      type: 'increment',
      payload: amount
    };
  }
  
  export function decrementLegacy(amount = 1) {
    return {
      type: 'decrement',
      payload: amount
    };
  }

//Reducer (リデューサー) の定義
//Reducer (リデューサー) は、アクションに基づいて状態を更新する関数
export default function counterReducer(state = initialState, 
    action: {type: string, payload: number}) {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                data: state.data + action.payload
            }
        case 'decrement':
            return {
                ...state,
                data: state.data - action.payload
            }
        default:
            return state;
    }
}