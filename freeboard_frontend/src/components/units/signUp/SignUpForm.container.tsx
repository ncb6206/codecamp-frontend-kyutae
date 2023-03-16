import SignUpFormUI from "./SignUpForm.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./SignUpForm.queries";
import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(
    CREATE_USER
  );

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSignUp = async () => {
    if (!name || !email || !password) {
      Modal.error({ content: "빈칸을 모두 입력해주세요!" });
      return;
    }

    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!emailRegex.test(email)) {
      Modal.error({ content: "이메일을 제대로 입력해주세요!" });
      return;
    }

    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });

      if (typeof result.data?.createUser._id !== "string") {
        Modal.error({ content: "일시적인 오류가 있습니다. 다시 시도해 주세요." });
        return;
      }

      Modal.success({ content: "회원가입 완료!!" });
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <SignUpFormUI
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSignUp={onClickSignUp}
    />
  );
}
