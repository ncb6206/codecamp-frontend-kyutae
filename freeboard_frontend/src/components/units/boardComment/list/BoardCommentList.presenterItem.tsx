import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getMyDate } from "../../../../commons/libraries/util";
import * as S from "../list/BoardCommentList.styles";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";

export default function BoardCommentListUIItem(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickDelete = async () => {
    const myPassword = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png"
                onClick={onClickDelete}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getMyDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}
      {isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
    </>
  );
}