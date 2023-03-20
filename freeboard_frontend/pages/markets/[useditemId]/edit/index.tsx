import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import { useAuth } from "../../../../src/components/commons/hooks/useAuth";

export default function MarketEditPage() {
  useAuth();

  return <MarketWrite isEdit={true} />;
}
