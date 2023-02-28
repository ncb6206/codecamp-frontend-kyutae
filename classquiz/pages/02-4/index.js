import { useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changePasswordConfirm = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const onCheck = () => {
    if (email.includes("@") === false) {
      setEmailError("@가 없습니다!");
    } else {
      setEmailError("");
    }
    if (password !== passwordConfirm) {
      setPasswordError("비밀번호와 비밀번호확인이 일치하지 않습니다!");
      setPasswordConfirmError("비밀번호와 비밀번호확인이 일치하지 않습니다!");
    } else {
      setPasswordError("");
      setPasswordConfirmError("");
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={changeEmail} />
      <div style={{ color: "red" }}>{emailError}</div>
      비밀번호 : <input type="password" onChange={changePassword} />
      <div style={{ color: "red" }}>{passwordError}</div>
      비밀번호 확인 : <input type="password" onChange={changePasswordConfirm} />
      <div style={{ color: "red" }}>{passwordConfirmError}</div>
      <button onClick={onCheck}>가입하기</button>
    </>
  );
}
