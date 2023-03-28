import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM } from "../../../../src/components/units/market/detail/MarketDetail.queries";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../src/commons/types/generated/types";

export default function MarketEditPage() {
  const router = useRouter();
  useAuth();

  const { data } = useQuery<Pick<IQuery, "fetchUseditem">, IQueryFetchUseditemArgs>(
    FETCH_USEDITEM,
    {
      variables: {
        useditemId: String(router.query.useditemId),
      },
    }
  );

  return <MarketWrite isEdit={true} data={data} />;
}
