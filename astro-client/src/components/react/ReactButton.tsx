import { useStore } from "@nanostores/react";
import { count, increment } from "../../stores/counter.ts";

export const ReactButton = () => {
  const counter = useStore(count);

  return (
    <div>
      <h2>React</h2>
      <p>{counter}</p>
      <button onClick={increment}>Increment count</button>
    </div>
  );
};
