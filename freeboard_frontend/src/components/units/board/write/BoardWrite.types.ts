import type { ChangeEvent } from "react";
import { Address } from "react-daum-postcode/lib/loadPostcode";
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
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onCompleteAddressSearch: (address: Address) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  onToggleModal: () => void;
  zipcode: string;
  address: string;
  addressDetail: string;
  isActive: boolean;
  isOpen: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface BoardAddress {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface ImyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: BoardAddress;
}

export interface IUpdateBoard {
  boardId: string;
  password: string;
  updateBoardInput: ImyUpdateBoardInput;
}
