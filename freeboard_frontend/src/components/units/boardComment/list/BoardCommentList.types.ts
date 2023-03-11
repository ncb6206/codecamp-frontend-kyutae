import type { IBoardComment, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface IBoardCommentListUIItemProps {
  key?: string;
  el?: IBoardComment;
}
