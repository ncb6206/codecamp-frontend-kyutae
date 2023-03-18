import SignUpFormUI from "./SignUpForm.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./SignUpForm.queries";
import { IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { schema } from "./SignupForm.yup";
import { ISignUpFormData } from "./SignUpForm.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUpForm() {
  const router = useRouter();

  const [createUser] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(
    CREATE_USER
  );

  const { register, handleSubmit, formState } = useForm<ISignUpFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignUp = async (data: ISignUpFormData) => {
    const { name, email, password } = data;
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
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSignUp={onClickSignUp}
    />
  );
}
