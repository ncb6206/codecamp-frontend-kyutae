import { useMutation } from "@apollo/client";
import Upload01UI from "./Uploads01.presenter";
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "./Uploads01.validation";
import { Modal } from "antd";
import { IUpload01Props } from "./Uploads01.types";

export default function Upload01(props: IUpload01Props) {
  const [imageUrl, setImageUrl] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(
    UPLOAD_FILE
  );

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    if (!file) {
      Modal.error({ content: "파일이 없습니다." });
      return;
    }

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result);
        setImageUrl(event.target?.result);
      }
    };

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      props.onChangeFileUrl(imageUrl, result.data?.uploadFile.url || "", props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Upload01UI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
      imageUrl={imageUrl}
    />
  );
}
