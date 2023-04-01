import * as S from "../list/MarketCommentList.styles";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { useEdit } from "../../../commons/hooks/useEdit";
import { DELETE_USEDITEM_QUESTION, FETCH_USEDITEM_QUESTIONS } from "./MarketCommentList.queries";
import { IMarketCommentListUIItemProps } from "./MarketCommentList.types";
import { getMyDate } from "../../../../commons/libraries/util";
import MarketCommentWrite from "../write/MarketCommentWrite.container";

export default function MarketCommentListUIItem(props: IMarketCommentListUIItemProps) {
  const router = useRouter();
  const { isEdit, onClickUpdate } = useEdit();

  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: String(props.el?._id) },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useitemId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
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
                <S.Writer>{"임시"}</S.Writer>
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
      {isEdit && <MarketCommentWrite isEdit={true} onClickUpdate={onClickUpdate} el={props.el} />}
    </>
  );
}
