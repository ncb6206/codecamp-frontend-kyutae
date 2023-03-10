import * as S from "./LayoutHeader.styles";
import { LayoutHeaderUIProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: LayoutHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.InnerLogo onClick={props.onClickLogo}>💎 LIVE</S.InnerLogo>
        <S.InnerButtonWrapper>
          <S.InnerButton onClick={props.onClickLogin}>로그인</S.InnerButton>
          <S.InnerButton>회원가입</S.InnerButton>
        </S.InnerButtonWrapper>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
