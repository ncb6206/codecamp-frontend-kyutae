import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationCreateUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEM_QUESTIONS } from "../list/MarketCommentList.queries";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import { CREATE_USEDITEM_QUESTION, UPDATE_USEDITEM_QUESTION } from "./MarketCommentWrite.queries";
import {
  IMarketCommentWriteProps,
  ImyUpdateUseditemCommentInputProps,
  IUseditemCommentData,
} from "./MarketCommentWrite.types";
import { schema } from "./MarketCommentWrite.yup";

export default function MarketCommentWrite(props: IMarketCommentWriteProps) {
  const router = useRouter();
  const { register, handleSubmit, formState, reset, watch } = useForm<IUseditemCommentData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const ContentsValue = watch("contents");

  // prettier-ignore
  const [createUseditemQuestion] = useMutation<Pick<IMutation,"createUseditemQuestion">,IMutationCreateUseditemQuestionArgs>(CREATE_USEDITEM_QUESTION);
  // prettier-ignore
  const [updateUseditemQuestion] = useMutation<Pick<IMutation,"updateUseditemQuestion">,IMutationUpdateUseditemQuestionArgs>(UPDATE_USEDITEM_QUESTION);

  const onClickSubmit = async (data: IUseditemCommentData) => {
    const { contents } = data;

    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { contents },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      console.log(result);
      Modal.success({ content: "문의가 등록되었습니다!" });
      reset();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdateMarketComment = async (data: IUseditemCommentData) => {
    if (!props.el?._id) return;

    const { contents } = data;
    const myUpdateUseditemCommentInput: ImyUpdateUseditemCommentInputProps = {};
    if (contents) myUpdateUseditemCommentInput.contents = contents;

    try {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: String(props.el?._id),
          updateUseditemQuestionInput: myUpdateUseditemCommentInput,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      props.onClickUpdate();
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MarketCommentWriteUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      ContentsValue={ContentsValue}
      isEdit={props.isEdit}
      el={props.el}
      onClickUpdateMarketComment={onClickUpdateMarketComment}
    />
  );
}
