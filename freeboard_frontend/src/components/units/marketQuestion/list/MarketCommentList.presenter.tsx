import InfiniteScroll from "react-infinite-scroller";
import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
import { IMarketCommentListUIProps } from "./MarketCommentList.types";

export default function MarketCommentListUI(props: IMarketCommentListUIProps) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <MarketCommentListUIItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
