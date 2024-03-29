import type { IBoardComment } from "../../../../commons/types/generated/types";
import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IBoardWriteProps {
  isEdit?: boolean;
  onClickUpdate: () => void;
  el?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
  onChangeRating: (value: number) => void;
  onClickSubmit: (data: IBoardCommentData) => Promise<void>;
  onClickUpdateBoardComment: (data: IBoardCommentData) => Promise<void>;
  register: UseFormRegister<IBoardCommentData>;
  handleSubmit: UseFormHandleSubmit<IBoardCommentData>;
  formState: FormState<IBoardCommentData>;
  rating: number;
  isEdit?: boolean;
  el?: IBoardComment;
  ContentsValue: string;
}

export interface ImyUpdateBoardCommentInputProps {
  contents?: string;
  rating?: number;
}

export interface IBoardCommentData {
  writer: string;
  password: string;
  contents: string;
}
