import { gql, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     Modal.error({ content: "로그인 후 이용 가능합니다!!!" });
  //     void router.push("/23-08-login-check-hoc");
  //   }
  // }, []);

  return <>{data?.fetchUserLoggedIn.name}님 환영합니다!</>;
}

export default withAuth(LoginSuccessPage);
