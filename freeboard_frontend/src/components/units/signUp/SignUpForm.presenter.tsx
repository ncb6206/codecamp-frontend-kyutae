import * as S from "./SignUpForm.styles";
import { ISignUpFormUIProps } from "./SignUpForm.types";

export default function SignUpFormUI(props: ISignUpFormUIProps) {
  return (
    <S.SignUpFormWrapper onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.NameInputWrapper>
        <S.InputLabel>닉네임</S.InputLabel>
        <S.InputBox type="text" placeholder="Name" {...props.register("name")} />
        <S.ErrorMessage>{props.formState.errors.name?.message}</S.ErrorMessage>
      </S.NameInputWrapper>
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
      <S.SignUpButton htmlType="submit">회원가입</S.SignUpButton>
    </S.SignUpFormWrapper>
  );
}
