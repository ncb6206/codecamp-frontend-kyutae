import { useRouter } from "next/router";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { useQuery } from "@apollo/client";

export default function MarketEditPage() {
  //   const router = useRouter();

  //   const {data} = useQuery()
  return <MarketWrite isEdit={true} />;
}
