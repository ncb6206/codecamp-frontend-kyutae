import * as S from "./LayoutHeader.styles";
import { LayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: LayoutHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo onClick={props.onClickMoveToPage("/")}>💎 다이아 마켓</S.InnerLogo>
        <S.InnerButtonWrapper>
          {props.accessToken ? (
            <>
              <S.Avatar src="/images/avatar.png" />
              <S.User>{props.data?.fetchUserLoggedIn?.name}님 환영합니다!</S.User>
              <S.InnerButton onClick={props.onClickLogout}>로그아웃</S.InnerButton>
            </>
          ) : (
            <S.InnerButton onClick={props.onClickMoveToPage("/login")}>로그인</S.InnerButton>
          )}
          <S.InnerButton onClick={props.onClickMoveToPage("/signup")}>회원가입</S.InnerButton>
        </S.InnerButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
