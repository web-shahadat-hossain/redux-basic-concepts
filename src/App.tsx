import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/counter/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="text-center ">Hello redux</h1>

      <div className="text-center ">
        <button
          className="text-lg font-bold mr-5"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="text-lg font-bold mr-5"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment By Amount
        </button>
        <span>{count}</span>
        <button
          className="text-lg font-bold ml-5"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
