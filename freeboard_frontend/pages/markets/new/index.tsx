import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";

export default function MarketWritePage() {
  useAuth();

  return <MarketWrite isEdit={false} />;
}
