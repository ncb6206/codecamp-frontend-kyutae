import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { useMoveToPage } from "../../hooks/useMoveToPage";

export default function LayoutNavigation() {
  const { onClickMoveToPage } = useMoveToPage();

  return <LayoutNavigationUI onClickMoveToPage={onClickMoveToPage} />;
}
