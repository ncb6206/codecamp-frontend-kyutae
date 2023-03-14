import { useMutation } from "@apollo/client";
import Upload01UI from "./Uploads01.presenter";
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { ChangeEvent, useRef } from "react";
import { checkValidationFile } from "./Uploads01.validation";
import { Modal } from "antd";
import { IUpload01Props } from "./Uploads01.types";

export default function Upload01(props: IUpload01Props) {
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

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);
      props.onChangeFileUrl(result.data?.uploadFile.url ?? "", props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <Upload01UI
      fileUrl={props.fileUrl}
      fileRef={fileRef}
      onClickImage={onClickImage}
      onChangeFile={onChangeFile}
    />
  );
}
