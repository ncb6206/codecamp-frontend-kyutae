import * as S from "./Uploads01.styles";
import { IUpload01UIProps } from "./Uploads01.types";

export default function Upload01UI(props: IUpload01UIProps) {
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.onClickImage}
        />
      ) : (
        <S.UploadButton onClick={props.onClickImage}>
          <>+</>
          <>Upload</>
        </S.UploadButton>
      )}
      <S.UploadFile type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  );
}
