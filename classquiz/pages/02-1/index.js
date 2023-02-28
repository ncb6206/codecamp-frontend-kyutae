import { useState } from "react";

// export default function HelloPage() {
//   const changeButton = () => {
//     document.getElementById("hello").innerText = "반갑습니다";
//   };

//   return (
//     <>
//       <button id="hello" onClick={changeButton}>
//         안녕하세요
//       </button>
//     </>
//   );
// }

export default function HelloPage() {
  const [hello, setHello] = useState("안녕하세요");
  const changeButton = () => {
    setHello("반갑습니다");
  };

  return (
    <>
      <button onClick={changeButton}>{hello}</button>
    </>
  );
}
