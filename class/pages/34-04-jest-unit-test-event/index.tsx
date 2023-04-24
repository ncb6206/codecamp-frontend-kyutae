// 실제 기능
import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  const qqq = Math.random();

  console.log(qqq);

  function onClickCountUp() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div role="count">{count}</div>
      <button onClick={onClickCountUp} role="count-button">
        카운트 올리기!!!
      </button>
    </>
  );
}
