import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/boards");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  return <LayoutHeaderUI onClickLogo={onClickLogo} onClickLogin={onClickLogin} />;
}
