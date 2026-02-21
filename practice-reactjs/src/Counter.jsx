import {useState,useContext} from "react";
import {CounterContext} from "./CounterContext";
 export function Counter() {
  const {count, setCount}= useContext(CounterContext);

  return (
    <>
<h1>{count}</h1>

        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button>
    </>
  )
}
export default Counter;