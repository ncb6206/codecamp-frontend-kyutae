import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import * as S from "./MarketLists.styles";
import { IMarketListsUIProps } from "./MarketLists.types";

export default function MarketListsUI(props: IMarketListsUIProps) {
  console.log(props.data?.fetchUseditems);
  return (
    <S.Wrapper>
      <S.ListWrapper>
        {props.data?.fetchUseditems?.map((el) => (
          <S.ListRow key={el._id}>
            <S.ListImageWrapper>
              {el.images?.filter((el) => el).length && (
                <S.ListImage
                  src={`https://storage.googleapis.com/${el.images?.filter((el) => el)[0]}`}
                />
              )}
            </S.ListImageWrapper>
            <S.ListContent onClick={props.onClickMoveToPage(`/markets/${el._id}`)}>
              <S.ListName>{el.name}</S.ListName>
              <S.ListContents>{el.contents}</S.ListContents>
              <S.ListRemarks>{el.remarks}</S.ListRemarks>
              <S.ListPickedCount>{el.pickedCount}</S.ListPickedCount>
            </S.ListContent>
            <S.ListPrice>{el.price}</S.ListPrice>
          </S.ListRow>
        ))}
      </S.ListWrapper>
      <S.Footer>
        <Paginations01 refetch={props.refetch} />
        <S.Button onClick={props.onClickMoveToPage("/markets/new")}>상품 등록하기</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
