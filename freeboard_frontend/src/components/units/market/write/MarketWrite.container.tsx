import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
// prettier-ignore
import {IMutation,IMutationCreateUseditemArgs,IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEMS } from "../lists/MarketLists.queries";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./MarketWrite.queries";
import { IMarketWriteData, IMarketWriteProps, ImyUpdateUseditemInput } from "./MarketWrite.types";
import { schema } from "./MarketWrite.yup";

export default function MarketWrite(props: IMarketWriteProps) {
  const router = useRouter();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  // prettier-ignore
  const [createUseditem] = useMutation<Pick<IMutation, "createUseditem">,IMutationCreateUseditemArgs>(CREATE_USEDITEM);
  // prettier-ignore
  const [updateUseditem] = useMutation<Pick<IMutation, "updateUseditem">,IMutationUpdateUseditemArgs>(UPDATE_USEDITEM);

  const { register, handleSubmit, formState, setValue, trigger } = useForm<IMarketWriteData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    setValue("contents", value === "<p><br></p>" ? "" : value);

    void trigger("contents");
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    const newFileUrl = [...imageUrls];
    newFileUrl[index] = fileUrl;
    setImageUrls(newFileUrl);

    setValue("images", imageUrls);
    console.log(imageUrls);

    void trigger("images");
  };

  const onClickMarketWrite = async (data: IMarketWriteData) => {
    const { name, remarks, contents, price, tags, useditemAddress, images } = data;
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            contents,
            price,
            images,
          },
        },
        refetchQueries: [{ query: FETCH_USEDITEMS }],
      });
      if (typeof result.data?.createUseditem?._id !== "string") {
        Modal.error({ content: "일시적인 오류가 있습니다. 다시 시도해 주세요." });
        return;
      }

      Modal.success({ content: "상품 입력이 완료되었습니다!" });
      void router.push(`/markets/${result.data?.createUseditem?._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickEdit = async (data: IMarketWriteData) => {
    const { name, remarks, contents, price, tags, useditemAddress, images } = data;

    const myUpdateUseditemInput: ImyUpdateUseditemInput = {};
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: String(router.query.useditemId),
          updateUseditemInput: myUpdateUseditemInput,
        },
      });
      if (typeof result.data?.updateUseditem._id !== "string") {
        Modal.error({ content: "일시적인 오류가 있습니다. 다시 시도해 주세요." });
        return;
      }

      Modal.success({ content: "상품 수정이 완료되었습니다!" });
      void router.push(`/markets/${result.data?.updateUseditem?._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MarketWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickMarketWrite={onClickMarketWrite}
      onClickEdit={onClickEdit}
      onChangeContents={onChangeContents}
      onChangeFileUrl={onChangeFileUrl}
      isEdit={props.isEdit}
      imageUrls={imageUrls}
    />
  );
}
