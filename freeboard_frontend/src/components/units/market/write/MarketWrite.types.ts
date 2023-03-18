import { InputMaybe } from "../../../../commons/types/generated/types";
import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface MarketWriteAddress {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IMarketWriteData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: InputMaybe<string[]>;
  useditemAddress: MarketWriteAddress;
  images: InputMaybe<string[]>;
}

export interface IMarketWriteUIProps {
  register: UseFormRegister<IMarketWriteData>;
  handleSubmit: UseFormHandleSubmit<IMarketWriteData>;
  formState: FormState<IMarketWriteData>;
  onClickMarketWrite: (data: IMarketWriteData) => void;
  isEdit: boolean;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
