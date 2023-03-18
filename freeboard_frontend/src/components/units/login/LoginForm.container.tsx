import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { IMutation, IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import LoginFormUI from "./LoginForm.presenter";
import { LOGIN_USER } from "./LoginForm.queries";
import { useForm } from "react-hook-form";
import { ILoginFormData } from "./LoginForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./LoginForm.yup";

export default function LoginForm() {
  const router = useRouter();
  const [loginUser] = useMutation<Pick<IMutation, "loginUser">, IMutationLoginUserArgs>(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm<ILoginFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [accessToken, setAceessToken] = useRecoilState(accessTokenState);

  const onClickLogin = async (data: ILoginFormData) => {
    const { email, password } = data;
    console.log(email, password);

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
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
