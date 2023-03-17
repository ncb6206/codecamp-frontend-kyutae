import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  // const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onClickLogo = () => {
    void router.push("/boards");
  };

  const onClickLogin = () => {
    void router.push("/login");
  };

  const onClickSignup = () => {
    void router.push("/signup");
  };

  const onClickLogout = () => {
    void router.push("/boards");
    localStorage.removeItem("accessToken");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickSignup={onClickSignup}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}
