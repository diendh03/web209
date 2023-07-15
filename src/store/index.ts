import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer, { ICounterState } from "./counter/reduce";
import thunk from "redux-thunk";

//định nghĩa 1 cái rootstate chjung
export interface IRootState {
  counter: ICounterState;
}

const rootReduce = combineReducers({
  counter: counterReducer,
});

//tạo ra store
export const store = createStore(rootReduce, applyMiddleware(thunk));
