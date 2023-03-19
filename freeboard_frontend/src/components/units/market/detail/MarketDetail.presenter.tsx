import { IMarketDetailUIProps } from "./MarketDetail.types";
import * as S from "./MarketDetail.styles";
import { getMyDate } from "../../../../commons/libraries/util";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  console.log(props.data?.fetchUseditem);
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.CreatedAt>{getMyDate(props.data?.fetchUseditem?.createdAt)}</S.CreatedAt>
            </S.Info>
            <S.Address>
              <S.AddressName>{props.data?.fetchUseditem?.useditemAddress?.address}</S.AddressName>
              <S.AddressDetail>
                {props.data?.fetchUseditem?.useditemAddress?.addressDetail}
              </S.AddressDetail>
            </S.Address>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Writer>{props.data?.fetchUseditem?.name}</S.Writer>
          <S.Title>{props.data?.fetchUseditem?.remarks}</S.Title>
          <S.Contents>{props.data?.fetchUseditem?.contents}</S.Contents>
          <S.ImageWrapper>
            {props.data?.fetchUseditem?.images
              ?.filter((el) => el)
              .map((el) => (
                <S.BoardImage key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </S.ImageWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToPage("/boards")}>목록으로</S.Button>
        <S.Button
          onClick={props.onClickMoveToPage(
            `/boards/${String(props.data?.fetchUseditem?._id)}/edit`
          )}
        >
          수정하기
        </S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
