import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ILoginFormUIProps {
  register: UseFormRegister<ILoginFormData>;
  handleSubmit: UseFormHandleSubmit<ILoginFormData>;
  formState: FormState<ILoginFormData>;
  onClickLogin: (data: ILoginFormData) => void;
}

export interface ILoginFormData {
  email: string;
  password: string;
}
