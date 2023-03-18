import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ISignUpFormUIProps {
  register: UseFormRegister<ISignUpFormData>;
  handleSubmit: UseFormHandleSubmit<ISignUpFormData>;
  formState: FormState<ISignUpFormData>;
  onClickSignUp: (data: ISignUpFormData) => void;
}

export interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
}
