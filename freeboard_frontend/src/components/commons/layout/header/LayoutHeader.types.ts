import { IQuery } from "../../../../commons/types/generated/types";

export interface LayoutHeaderUIProps {
  onClickMoveToPage: (path: string) => () => void;
  onClickLogout: () => void;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
  accessToken: string;
}
