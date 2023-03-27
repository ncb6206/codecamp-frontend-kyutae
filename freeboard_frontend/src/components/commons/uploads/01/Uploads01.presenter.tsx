import * as S from "./Uploads01.styles";
import { IUpload01UIProps } from "./Uploads01.types";

export default function Upload01UI(props: IUpload01UIProps) {
  console.log(props.imageUrl);
  return (
    <>
      {props.fileUrl ? (
        <S.UploadImage
          src={props.imageUrl || `https://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.onClickImage}
        />
      ) : (
        <S.UploadButton type="button" onClick={props.onClickImage}>
          <>+</>
          <>Upload</>
        </S.UploadButton>
      )}

      <S.UploadFile type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  );
}
