import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ImyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IUpdateBoard {
  boardId: string;
  password: string;
  updateBoardInput: ImyUpdateBoardInput;
}
