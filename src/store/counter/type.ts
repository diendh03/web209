import { CounterAction } from "./action";

//khai báo type chung
export const INCREASE_COUNT = "INCREASE_COUNT";
//
export type DispatchType = (args: CounterAction) => CounterAction;
