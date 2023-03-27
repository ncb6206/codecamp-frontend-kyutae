import { ChangeEvent, RefObject } from "react";

export interface IUpload01Props {
  index: number;
  fileUrl: string;
  defaultImageUrl?: string[];
  onChangeFileUrl: (imageUrl: string, fileUrl: string, index: number) => void;
}

export interface IUpload01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickImage: () => void;
  imageUrl: string;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
