import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IMarketCommentWriteUIProps {
  onClickSubmit: (data: IUseditemCommentData) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<IUseditemCommentData>;
  register: UseFormRegister<IUseditemCommentData>;
  formState: FormState<IUseditemCommentData>;
  ContentsValue: string;
}

export interface ImyUpdateUseditemCommentInputProps {
  contents?: string;
}

export interface IUseditemCommentData {
  contents: string;
}
