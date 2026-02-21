

import {useState,useContext} from "react";
import {CounterContext} from "./CounterContext";
 function Counter2() {
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
export default Counter2;