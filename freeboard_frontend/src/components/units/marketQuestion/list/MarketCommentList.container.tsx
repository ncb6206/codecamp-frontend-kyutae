import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./MarketCommentList.queries";

export default function MarketCommentList() {
  const router = useRouter();

  // prettier-ignore
  const {data, fetchMore} = useQuery<Pick<IQuery,"fetchUseditemQuestions">,IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTIONS,{
    variables: {useditemId: String(router.query.useditemId)}
  });

  const onLoadMore = () => {
    if (!data?.fetchUseditemQuestions.length) return;

    void fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return <MarketCommentListUI data={data} onLoadMore={onLoadMore} />;
}
