import type { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getMyDate } from "../../../../commons/libraries/util";
import type {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import * as S from "../list/BoardCommentList.styles";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import type { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import { useOpen } from "../../../commons/hooks/useOpen";
import { useEdit } from "../../../commons/hooks/useEdit";

export default function BoardCommentListUIItem(props: IBoardCommentListUIItemProps) {
  const router = useRouter();
  const { isEdit, onClickUpdate } = useEdit();
  const { isOpen, onToggleModal } = useOpen();
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickWriter = () => {
    Modal.success({ content: `${String(props.el?.writer)}님이 작성한 글입니다.` });
  };

  return (
    <>
      {isOpen && (
        <Modal
          title="비밀번호를 입력해주세요"
          open={true}
          onOk={onClickDelete}
          onCancel={onToggleModal}
        >
          <input onChange={onInputPassword} />
        </Modal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer onClick={onClickWriter}>{props.el?.writer}</S.Writer>
                <S.RatingWrapper>
                  <S.RateIcon disabled value={props.el?.rating} />
                </S.RatingWrapper>
              </S.WriterWrapper>
              <S.Contents onClick={onClickWriter}>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png"
                onClick={onToggleModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString onClick={onClickWriter}>{getMyDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}
      {isEdit && <BoardCommentWrite isEdit={true} onClickUpdate={onClickUpdate} el={props.el} />}
    </>
  );
}
