import * as S from "../write/BoardCommentWrite.styles";
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdateBoardComment)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
      {!props.isEdit && (
        <S.TitleWrapper>
          <S.PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>댓글</span>
        </S.TitleWrapper>
      )}
      <S.InputWrapper>
        <S.Input
          type="text"
          placeholder="작성자"
          defaultValue={props.el?.writer || ""}
          readOnly={!!props.el?.writer}
          {...props.register("writer")}
        />
        <S.Input type="password" placeholder="비밀번호" {...props.register("password")} />
        <S.RateIcon value={props.rating || props.el?.rating || 0} onChange={props.onChangeRating} />
      </S.InputWrapper>
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
          <S.ErrorMessage>
            {props.formState.errors.contents?.message ||
              props.formState.errors.password?.message ||
              props.formState.errors.writer?.message}
          </S.ErrorMessage>
          <S.Button>{props.isEdit ? "수정하기" : "등록하기"}</S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
