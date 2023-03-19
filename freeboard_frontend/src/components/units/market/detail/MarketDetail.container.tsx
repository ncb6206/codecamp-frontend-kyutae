import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MarketDetailUI from "./MarketDetail.presenter";
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./MarketDetail.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_USEDITEM,
    {
      variables: {
        useditemId: String(router.query.useditemId),
      },
    }
  );

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: String(router.query.useditemId),
        },
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MarketDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToPage={onClickMoveToPage}
    />
  );
}
