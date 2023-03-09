import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRating: (value: number) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  writer: string;
  password: string;
  contents: string;
  rating: number;
  isEdit?: boolean;
  el?: IBoardComment;
}

export interface ImyUpdateBoardCommentInputProps {
  contents?: string;
  rating?: number;
}
