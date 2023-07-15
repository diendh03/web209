import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const ComponentB = (props: any) => {
  console.log(props);
  const counterState = useSelector((state: IRootState) => state.counter);
  return <div>{counterState.counter}</div>;
};

export default ComponentB;
