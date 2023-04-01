import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IUseditemQuestion } from "../../../../commons/types/generated/types";

export interface IMarketCommentWriteUIProps {
  onClickSubmit: (data: IUseditemCommentData) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<IUseditemCommentData>;
  register: UseFormRegister<IUseditemCommentData>;
  onClickUpdateMarketComment: (data: IUseditemCommentData) => Promise<void>;
  formState: FormState<IUseditemCommentData>;
  ContentsValue: string;
  el?: IUseditemQuestion;
  isEdit?: boolean;
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
