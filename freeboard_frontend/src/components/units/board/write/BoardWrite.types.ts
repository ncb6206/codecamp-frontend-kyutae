import type { ChangeEvent } from "react";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import type { InputMaybe, IQuery } from "../../../../commons/types/generated/types";
import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  // writerError: string;
  // passwordError: string;
  // titleError: string;
  // contentsError: string;
  // onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  // onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrl: (fileUrl: string, index: number) => void;
  onCompleteAddressSearch: (address: Address) => void;
  onClickSubmit: (data: IBoardData) => Promise<void>;
  onClickEdit: (data: IBoardData) => Promise<void>;
  onToggleModal: () => void;
  register: UseFormRegister<IBoardData>;
  handleSubmit: UseFormHandleSubmit<IBoardData>;
  formState: FormState<IBoardData>;
  zipcode: string;
  address: string;
  isActive: boolean;
  isOpen: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  imageUrls: string[];
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
  images?: InputMaybe<string[]>;
}

export interface IBoardData {
  writer: string;
  password: string;
  title: string;
  contents: string;
  youtubeUrl: string;
  boardAddress: BoardAddress;
  images: InputMaybe<string[]>;
}

export interface IUpdateBoard {
  boardId: string;
  password: string;
  updateBoardInput: ImyUpdateBoardInput;
}
