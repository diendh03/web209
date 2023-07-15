import { CounterAction } from "./action";
import * as actions from "./type";
//tạo ra 1 khuôn state
export interface ICounterState {
  counter: number;
}
//khởi tạo 1 state counter =0
const initCounterState: ICounterState = {
  counter: 0,
};
const counterReducer = (
  state: ICounterState = initCounterState,
  action: CounterAction
): ICounterState => {
  switch (action.type) {
    case actions.INCREASE_COUNT:
      //Xử lí logic tăng
      state = {
        ...state,
        counter: state.counter + action.payload,
      };
  }
  return state;
};
export default counterReducer;
