import { IQuery } from "../../../../commons/types/generated/types";

export interface LayoutHeaderUIProps {
  onClickLogo: () => void;
  onClickLogin: () => void;
  onClickSignup: () => void;
  onClickLogout: () => void;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}
