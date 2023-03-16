import * as S from "./LayoutHeader.styles";
import { LayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: LayoutHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo onClick={props.onClickLogo}>💎 LIVE</S.InnerLogo>
        <S.InnerButtonWrapper>
          {props.data ? (
            <>
              <S.Avatar src="/images/avatar.png" />
              <S.User>{props.data?.fetchUserLoggedIn?.name}님 환영합니다!</S.User>
              <S.InnerButton onClick={props.onClickLogout}>로그아웃</S.InnerButton>
            </>
          ) : (
            <S.InnerButton onClick={props.onClickLogin}>로그인</S.InnerButton>
          )}
          <S.InnerButton onClick={props.onClickSignup}>회원가입</S.InnerButton>
        </S.InnerButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
