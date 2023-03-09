import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import type { IBoardWriteProps, ImyUpdateBoardCommentInputProps } from "./BoardCommentWrite.types";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeRating = (value: number) => {
    setRating(value);
  };

  const onClickSubmit = async () => {
    if (writer && password && contents && rating) {
      try {
        const result = await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
            boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: String(router.query.boardId) },
            },
          ],
        });
        console.log(result);
        alert("댓글이 등록되었습니다!");
        setWriter("");
        setPassword("");
        setContents("");
        setRating(0);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    } else {
      alert("전체 다 입력해주세요!");
    }
  };

  const onClickUpdate = async () => {
    if (!props.el?._id) return;

    const myUpdateBoardCommentInput: ImyUpdateBoardCommentInputProps = {};
    if (contents) myUpdateBoardCommentInput.contents = contents;
    if (rating) myUpdateBoardCommentInput.rating = rating;

    try {
      await updateBoardComment({
        variables: {
          password,
          boardCommentId: String(props.el?._id),
          updateBoardCommentInput: myUpdateBoardCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      alert("댓글이 수정되었습니다!");
      props.setIsEdit?.(false);
      setWriter("");
      setPassword("");
      setContents("");
      setRating(0);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
