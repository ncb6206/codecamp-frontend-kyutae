import { ChangeEvent, RefObject } from "react";

export interface IUpload01Props {
  index: number;
  fileUrl: string;
  defaultImageUrl?: string[];
  onChangeFileUrl: (fileUrl: string, index: number) => void;
}

export interface IUpload01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  onClickImage: () => void;
  fileUrl: string;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
