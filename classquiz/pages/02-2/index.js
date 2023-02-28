// import { useState } from "react";

// export default function CounterPage() {
//   const [count, setCount] = useState(0);
//   const onClickCounter = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <div>{count}</div>
//       <button onClick={onClickCounter}>카운트증가</button>
//     </>
//   );
// }

export default function CounterPage() {
  let count = 0;

  const onClickCounter = () => {
    count += 1;
    document.getElementById("count").innerText = count;
  };

  return (
    <>
      <div id="count">0</div>
      <button onClick={onClickCounter}>카운트증가</button>
    </>
  );
}
