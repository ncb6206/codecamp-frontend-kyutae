import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveToPage: (path: string) => () => void;
  onClickDelete: () => void;
}
