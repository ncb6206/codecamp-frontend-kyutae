import { getMyDate } from "../../../../commons/libraries/util";
import * as S from "./BoardDetail.styles";
import type { IBoardDetailUIProps } from "./BoardDetail.types";
import YouTube, { YouTubeProps } from "react-youtube";
import { useEffect, useState } from "react";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const [videoId, setVideoId] = useState("");
  const opts: YouTubeProps["opts"] = {
    width: "800",
    height: "600",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  useEffect(() => {
    if (props.data?.fetchBoard?.youtubeUrl) {
      const url = new URL(props.data?.fetchBoard?.youtubeUrl);
      const videoId = url.searchParams.get("v");
      if (typeof videoId === "string") setVideoId(videoId);
    }
  }, []);

  console.log(props.data?.fetchBoard);
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
            <S.Address>
              <S.AddressName>{props.data?.fetchBoard?.boardAddress?.address}</S.AddressName>
              <S.AddressDetail>
                {props.data?.fetchBoard?.boardAddress?.addressDetail}
              </S.AddressDetail>
            </S.Address>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard?.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
          <S.YoutubeWrapper>
            {props.data?.fetchBoard?.youtubeUrl && <YouTube videoId={videoId} opts={opts} />}
          </S.YoutubeWrapper>
          <S.ImageWrapper>
            {props.data?.fetchBoard?.images
              ?.filter((el) => el)
              .map((el) => (
                <S.BoardImage key={el} src={`https://storage.googleapis.com/${el}`} />
              ))}
          </S.ImageWrapper>
        </S.Body>
        <S.Footer>
          <S.LikeWrapper onClick={props.onClickLike}>
            <S.LikeOutlinedIcon />
            <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
          </S.LikeWrapper>
          <S.DislikeWrapper onClick={props.onClickDislike}>
            <S.DislikeOutlinedIcon />
            <S.DislikeCount>{props.data?.fetchBoard?.dislikeCount}</S.DislikeCount>
          </S.DislikeWrapper>
        </S.Footer>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToPage("/boards")}>목록으로</S.Button>
        <S.Button
          onClick={props.onClickMoveToPage(`/boards/${String(props.data?.fetchBoard?._id)}/edit`)}
        >
          수정하기
        </S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
