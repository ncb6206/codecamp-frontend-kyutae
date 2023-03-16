import * as S from "./LoginForm.styles";
import { ILoginFormUIProps } from "./LoginForm.types";

export default function LoginFormUI(props: ILoginFormUIProps) {
  return (
    <S.LoginFormWrapper>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.EmailInputWrapper>
        <S.InputLabel>이메일</S.InputLabel>
        <S.InputBox type="text" placeholder="Email" onChange={props.onChangeEmail} />
      </S.EmailInputWrapper>
      <S.PasswordInputWrapper>
        <S.InputLabel>비밀번호</S.InputLabel>
        <S.InputBox type="password" placeholder="Password" onChange={props.onChangePassword} />
      </S.PasswordInputWrapper>
      <S.LoginButton onClick={props.onClickLogin}>로그인</S.LoginButton>
    </S.LoginFormWrapper>
  );
}
