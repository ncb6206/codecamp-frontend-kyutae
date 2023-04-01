import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./BoardCommentWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import type {
  IBoardCommentData,
  IBoardWriteProps,
  ImyUpdateBoardCommentInputProps,
} from "./BoardCommentWrite.types";
import type {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./BoardCommentWrite.yup";
import { Modal } from "antd";

export default function BoardCommentWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const { register, handleSubmit, formState, reset, watch } = useForm<IBoardCommentData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [rating, setRating] = useState(0);
  const ContentsValue = watch("contents");

  // prettier-ignore
  const [createBoardComment] = useMutation<Pick<IMutation, "createBoardComment">,IMutationCreateBoardCommentArgs>(CREATE_BOARD_COMMENT);
  // prettier-ignore
  const [updateBoardComment] = useMutation<Pick<IMutation, "updateBoardComment">,IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);

  const onChangeRating = (value: number) => {
    setRating(value);
  };

  const onClickSubmit = async (data: IBoardCommentData) => {
    if (!rating) {
      Modal.error({ content: "별점을 입력해주세요" });
      return;
    }
    const { writer, password, contents } = data;

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
      Modal.success({ content: "댓글이 등록되었습니다!" });
      reset();
      setRating(0);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdateBoardComment = async (data: IBoardCommentData) => {
    if (!props.el?._id) return;

    const { password, contents } = data;
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
      props.onClickUpdate();
      Modal.success({ content: "댓글이 수정되었습니다!" });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardCommentWriteUI
      onChangeRating={onChangeRating}
      onClickSubmit={onClickSubmit}
      onClickUpdateBoardComment={onClickUpdateBoardComment}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      rating={rating}
      isEdit={props.isEdit}
      el={props.el}
      ContentsValue={ContentsValue}
    />
  );
}
