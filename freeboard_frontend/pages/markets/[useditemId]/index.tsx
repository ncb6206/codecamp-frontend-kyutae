import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketCommentList from "../../../src/components/units/marketQuestion/list/MarketCommentList.container";
import MarketCommentWrite from "../../../src/components/units/marketQuestion/write/MarketCommentWrite.container";

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetail />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
