import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../hooks/useMoveToPage";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const [accessToken, setAceessToken] = useRecoilState(accessTokenState);
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onClickLogout = async () => {
    try {
      await logoutUser();
      setAceessToken("");

      void router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LayoutHeaderUI
      onClickLogout={onClickLogout}
      onClickMoveToPage={onClickMoveToPage}
      data={data}
      accessToken={accessToken}
    />
  );
}
