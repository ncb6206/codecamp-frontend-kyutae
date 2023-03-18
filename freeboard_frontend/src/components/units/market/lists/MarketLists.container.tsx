import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";
import MarketListsUI from "./MarketLists.presenter";
import { FETCH_USEDITEMS } from "./MarketLists.queries";

export default function MarketLists() {
  const router = useRouter();

  const { data, refetch } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USEDITEMS
  );

  const onClickCreateUseditem = () => {
    void router.push("/markets/new");
  };

  return <MarketListsUI onClickCreateUseditem={onClickCreateUseditem} />;
}
