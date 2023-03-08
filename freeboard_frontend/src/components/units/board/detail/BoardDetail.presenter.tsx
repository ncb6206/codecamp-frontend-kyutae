import { LikeOutlined } from "@ant-design/icons";
import { DislikeOutlined } from "@ant-design/icons/lib/icons";
import { getMyDate } from "../../../../commons/libraries/util";
import * as S from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import YouTube, { YouTubeProps } from "react-youtube";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const opts: YouTubeProps["opts"] = {
    width: "800",
    height: "600",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
              <S.CreatedAt>{getMyDate(props.data?.fetchBoard?.createdAt)}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          <S.YoutubeWrapper>
            {props.data?.fetchBoard?.youtubeUrl && (
              <YouTube videoId={String(props.data?.fetchBoard?.youtubeUrl)} opts={opts} />
            )}
          </S.YoutubeWrapper>
        </S.Body>
        <S.Footer>
          <S.LikeWrapper onClick={props.onClickLike}>
            <LikeOutlined />
            <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
          </S.LikeWrapper>
          <S.DislikeWrapper onClick={props.onClickDislike}>
            <DislikeOutlined style={{ transform: "scaleX(-1)" }} />
            <S.DislikeCount>{props.data?.fetchBoard?.dislikeCount}</S.DislikeCount>
          </S.DislikeWrapper>
        </S.Footer>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickEdit}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
