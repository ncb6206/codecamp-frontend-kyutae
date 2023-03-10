import { MouseEvent } from "react";
import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(event.currentTarget.id);
  };

  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}
