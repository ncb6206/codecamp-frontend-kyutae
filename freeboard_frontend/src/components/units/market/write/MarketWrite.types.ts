import { InputMaybe } from "../../../../commons/types/generated/types";
import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface UseditemAddressInput {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IMarketWriteData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags?: InputMaybe<string[]>;
  useditemAddress?: UseditemAddressInput;
  images?: InputMaybe<string[]>;
}

export interface IMarketWriteUIProps {
  register: UseFormRegister<IMarketWriteData>;
  handleSubmit: UseFormHandleSubmit<IMarketWriteData>;
  formState: FormState<IMarketWriteData>;
  onClickMarketWrite: (data: IMarketWriteData) => void;
  onClickEdit: (data: IMarketWriteData) => void;
  onChangeContents: (value: string) => void;
  onChangeFileUrl: (fileUrl: string, index: number) => void;
  isEdit: boolean;
  imageUrls: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IMarketWriteProps {
  isEdit: boolean;
}

export interface ImyUpdateUseditemInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: InputMaybe<string[]>;
  useditemAddress?: UseditemAddressInput;
  images?: InputMaybe<string[]>;
}
