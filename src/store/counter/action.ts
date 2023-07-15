import * as actionType from "./type";
export type CounterAction = {
  type: string;
  payload: number;
};
export function increaseCountAction(count: number) {
  const action: CounterAction = {
    type: actionType.INCREASE_COUNT,
    payload: count,
  };
  return (dispatch: actionType.DispatchType) => {
    dispatch(action);
  };
}
