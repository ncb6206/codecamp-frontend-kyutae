import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { IMutation, IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import LoginFormUI from "./LoginForm.presenter";
import { LOGIN_USER } from "./LoginForm.queries";

export default function LoginForm() {
  const router = useRouter();
  const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  const [accessToken, setAceessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    if (!email || !password) {
      Modal.error({ content: "빈칸을 모두 입력해주세요!" });
      return;
    }

    try {
      const result = await loginUser({
        variables: { email, password },
      });

      const accessToken = result.data?.loginUser.accessToken;

      if (!accessToken) {
        Modal.error({ content: "로그인에 실패했습니다. 다시 입력해주세요!" });
        return;
      }
      setAceessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);

      Modal.success({ content: "로그인되었습니다!!" });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <LoginFormUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
