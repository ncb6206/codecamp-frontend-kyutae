import { useState } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 640px;
  height: 1138px;
  border: 1px solid black;
  background-image: url("/img/Pizza.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 3rem;
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 87px;
  color: #000000;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: none;
  border-bottom: 1px solid #7d7d7d;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
`;

export const Error = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #ff1b6d;
  text-align: left;
  margin: 1rem 0;
`;

export const Login = styled.button`
  width: 540px;
  height: 76px;
  background: #ff1b6d;
  opacity: 0.6;
  border-radius: 38px;
  font-weight: 700;
  font-size: 26px;
  border: none;
  line-height: 38px;
  color: #ffffff;
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FooterElement = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
  margin: 0 1rem;
  cursor: pointer;
`;

export const KakaoLogin = styled.button`
  width: 540px;
  height: 76px;
  background: none;
  opacity: 0.6;
  border-radius: 38px;
  font-weight: 700;
  font-size: 26px;
  border: 2px solid #fae100;
  line-height: 38px;
  color: #ffe100;
  cursor: pointer;
`;

export default function EatsRoadPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
    if (email.includes("@") === false) {
      setEmailError("이메일 주소를 다시 확인해주세요.");
    } else {
      setEmailError("");
    }
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
    if (password.length >= 8 && password.length <= 16) {
      setPasswordError("");
    } else {
      setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.");
    }
  };

  const onCheck = () => {
    if (!emailError && !passwordError) {
      alert("환영합니다!");
    }
  };

  return (
    <Wrapper>
      <LogoImg src="/img/Logo.png"></LogoImg>
      <Title>잇츠로드</Title>
      <Input type="text" onChange={changeEmail} />
      <Error>{emailError}</Error>
      <Input type="password" onChange={changePassword} />
      <Error>{passwordError}</Error>
      <Login onClick={onCheck}>로그인</Login>
      <Footer>
        <FooterElement>이메일 찾기</FooterElement>
        <FooterElement>|</FooterElement>
        <FooterElement>비밀번호 찾기</FooterElement>
        <FooterElement>|</FooterElement>
        <FooterElement>회원가입</FooterElement>
      </Footer>
      <KakaoLogin>카카오톡으로 로그인</KakaoLogin>
    </Wrapper>
  );
}
