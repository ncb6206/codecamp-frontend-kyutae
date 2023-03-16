import * as S from "./SignUpForm.styles";
import { ISignUpFormUIProps } from "./SignUpForm.types";

export default function SignUpFormUI(props: ISignUpFormUIProps) {
  return (
    <S.SignUpFormWrapper>
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.NameInputWrapper>
        <S.InputLabel>닉네임</S.InputLabel>
        <S.InputBox type="text" placeholder="Name" onChange={props.onChangeName} />
      </S.NameInputWrapper>
      <S.EmailInputWrapper>
        <S.InputLabel>이메일</S.InputLabel>
        <S.InputBox type="text" placeholder="Email" onChange={props.onChangeEmail} />
      </S.EmailInputWrapper>
      <S.PasswordInputWrapper>
        <S.InputLabel>비밀번호</S.InputLabel>
        <S.InputBox type="password" placeholder="Password" onChange={props.onChangePassword} />
      </S.PasswordInputWrapper>
      <S.SignUpButton onClick={props.onClickSignUp}>회원가입</S.SignUpButton>
    </S.SignUpFormWrapper>
  );
}
