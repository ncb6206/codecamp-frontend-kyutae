// import { useState } from "react";

// export default function AuthenticationPage() {
//   const [authentication, setAuthentication] = useState("000000");
//   const onClickAuthentication = () => {
//     setAuthentication(String(~~(Math.random() * 1000000)).padStart(6, "0"));
//   };

//   return (
//     <>
//       <div>{authentication}</div>
//       <button onClick={onClickAuthentication}>인증번호전송</button>
//     </>
//   );
// }

export default function AuthenticationPage() {
  const onClickAuthentication = () => {
    document.getElementById("authentication").innerText = String(
      ~~(Math.random() * 1000000)
    ).padStart(6, "0");
  };

  return (
    <>
      <div id="authentication">000000</div>
      <button onClick={onClickAuthentication}>인증번호전송</button>
    </>
  );
}
