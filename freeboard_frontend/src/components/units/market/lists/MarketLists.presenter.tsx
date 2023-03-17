import * as S from "./MarketLists.styles";

export default function MarketListsUI(props) {
  return (
    <S.Wrapper>
      <S.Footer>
        <S.Button onClick={props.onClickCreateUseditem}>상품 등록하기</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
