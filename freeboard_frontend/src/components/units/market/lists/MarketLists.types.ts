import { ApolloQueryResult } from "@apollo/client";
import { IQuery, IQueryFetchUseditemsArgs } from "../../../../commons/types/generated/types";

export interface IMarketListsUIProps {
  onClickMoveToPage: (path: string) => () => void;
  data?: Pick<IQuery, "fetchUseditems">;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
}
