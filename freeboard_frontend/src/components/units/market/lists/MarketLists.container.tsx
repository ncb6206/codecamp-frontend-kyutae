import { useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import MarketListsUI from "./MarketLists.presenter";
import { FETCH_USEDITEMS } from "./MarketLists.queries";

export default function MarketLists() {
  const { onClickMoveToPage } = useMoveToPage();

  const { data, refetch } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USEDITEMS
  );

  return <MarketListsUI data={data} refetch={refetch} onClickMoveToPage={onClickMoveToPage} />;
}
