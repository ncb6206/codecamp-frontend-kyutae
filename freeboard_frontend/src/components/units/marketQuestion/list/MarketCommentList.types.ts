import { IQuery, IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface IMarketCommentListUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}

export interface IMarketCommentListUIItemProps {
  key?: string;
  el?: IUseditemQuestion;
}
