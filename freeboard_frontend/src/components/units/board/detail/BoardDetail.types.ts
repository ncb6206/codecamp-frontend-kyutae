import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickMoveToPage: (path: string) => () => void;
}
