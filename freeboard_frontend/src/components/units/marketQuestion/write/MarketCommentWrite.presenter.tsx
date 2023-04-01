import * as S from "../write/MarketCommentWrite.styles";
import { IMarketCommentWriteUIProps } from "./MarketCommentWrite.types";

export default function MarketCommentWriteUI(props: IMarketCommentWriteUIProps) {
  return (
    <S.Wrapper
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdateMarketComment)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
      {!props.isEdit && (
        <S.TitleWrapper>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>문의하기</span>
        </S.TitleWrapper>
      )}
      <S.ContentsWrapper>
        <S.Contents
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          defaultValue={props.el?.contents || ""}
          {...props.register("contents")}
        />
        <S.BottomWrapper>
          <S.ContentsLength>
            {props.ContentsValue ? props.ContentsValue.length : 0}/100
          </S.ContentsLength>
          <S.ErrorMessage>{props.formState.errors.contents?.message}</S.ErrorMessage>
          <S.Button>{props.isEdit ? "수정하기" : "등록하기"}</S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
