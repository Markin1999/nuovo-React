import { useEffect, useState } from "react";
import useCounter from "./useCounter";

export default function HookCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Incrementa</button>
      <button onClick={onDecrement}>Decrementa</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
