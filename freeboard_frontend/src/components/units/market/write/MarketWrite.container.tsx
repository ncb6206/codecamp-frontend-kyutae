import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { withAuth } from "../../../../commons/hocs/withAuth";
import { IMutation, IMutationCreateUseditemArgs } from "../../../../commons/types/generated/types";
import MarketWriteUI from "./MarketWrite.presenter";
import { CREATE_USEDITEM } from "./MarketWrite.queries";
import { IMarketWriteData } from "./MarketWrite.types";
import { schema } from "./MarketWrite.yup";

export default function MarketWrite(props) {
  const router = useRouter();

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const { register, handleSubmit, formState } = useForm<IMarketWriteData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
          },
        },
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

  return (
    <MarketWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickMarketWrite={onClickMarketWrite}
      isEdit={props.isEdit}
    />
  );
}
