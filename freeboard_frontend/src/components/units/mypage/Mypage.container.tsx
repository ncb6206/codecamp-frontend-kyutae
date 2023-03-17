import { withAuth } from "../../../commons/hocs/withAuth";
import MyPageUI from "./Mypage.presenter";

function MyPage() {
  return <MyPageUI />;
}

export default withAuth(MyPage);
