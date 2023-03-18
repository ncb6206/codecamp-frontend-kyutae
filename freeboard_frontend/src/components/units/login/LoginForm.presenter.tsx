import * as S from "./LoginForm.styles";
import { ILoginFormUIProps } from "./LoginForm.types";

export default function LoginFormUI(props: ILoginFormUIProps) {
  return (
    <S.LoginFormWrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.EmailInputWrapper>
        <S.InputLabel>이메일</S.InputLabel>
        <S.InputBox type="text" placeholder="Email" {...props.register("email")} />
        <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>
      </S.EmailInputWrapper>
      <S.PasswordInputWrapper>
        <S.InputLabel>비밀번호</S.InputLabel>
        <S.InputBox type="password" placeholder="Password" {...props.register("password")} />
        <S.ErrorMessage>{props.formState.errors.password?.message}</S.ErrorMessage>
      </S.PasswordInputWrapper>
      <S.LoginButton htmlType="submit">로그인</S.LoginButton>
    </S.LoginFormWrapper>
  );
}
