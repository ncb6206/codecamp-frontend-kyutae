import { withAuth } from "../../../../commons/hocs/withAuth";
import MarketWriteUI from "./MarketWrite.presenter";

function MarketWrite() {
  return <MarketWriteUI />;
}

export default withAuth(MarketWrite);
