import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";

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

export interface IMarketCommentWriteProps {
  isEdit: boolean;
  onClickUpdate: () => void;
  el?: IUseditemQuestion;
}
