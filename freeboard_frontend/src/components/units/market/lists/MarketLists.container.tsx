import { useRouter } from "next/router";
import MarketListsUI from "./MarketLists.presenter";

export default function MarketLists() {
  const router = useRouter();

  const onClickCreateUseditem = () => {
    void router.push("/markets/new");
  };

  return <MarketListsUI onClickCreateUseditem={onClickCreateUseditem} />;
}
