import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
// prettier-ignore
import {IMutation, IMutationDeleteUseditemArgs, IQuery, IQueryFetchUseditemArgs} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { FETCH_USEDITEMS } from "../lists/MarketLists.queries";
import MarketDetailUI from "./MarketDetail.presenter";
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./MarketDetail.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  // prettier-ignore
  const [deleteUseditem] = useMutation<Pick<IMutation, "deleteUseditem">,IMutationDeleteUseditemArgs>(DELETE_USEDITEM);

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
        refetchQueries: [{ query: FETCH_USEDITEMS }],
      });

      Modal.success({ content: "삭제가 완료되었습니다!" });
      void router.push("/markets");
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
