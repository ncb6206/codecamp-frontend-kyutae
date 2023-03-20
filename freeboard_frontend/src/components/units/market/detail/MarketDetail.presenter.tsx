import { IMarketDetailUIProps } from "./MarketDetail.types";
import * as S from "./MarketDetail.styles";
import { getMyDate } from "../../../../commons/libraries/util";
import Dompurify from "dompurify";

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
          <S.Contents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(props.data?.fetchUseditem?.contents ?? ""),
            }}
          />
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
        <S.Button onClick={props.onClickMoveToPage("/markets")}>목록으로</S.Button>
        <S.Button
          onClick={props.onClickMoveToPage(
            `/markets/${String(props.data?.fetchUseditem?._id)}/edit`
          )}
        >
          수정하기
        </S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
