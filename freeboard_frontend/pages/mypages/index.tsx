import { useAuth } from "../../src/components/commons/hooks/useAuth";
import MyPage from "../../src/components/units/mypage/Mypage.container";

export default function MyPagePage() {
  useAuth();

  return <MyPage />;
}
