import { BlueButton, RedInput } from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      작성자 :
      <RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={String(props.data?.fetchBoard?.writer)}
      />
      <br />
      제목 :
      <RedInput
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={String(props.data?.fetchBoard?.title)}
      />
      <br />
      내용 :
      <RedInput
        type="text"
        onChange={props.onChangeContents}
        defaultValue={String(props.data?.fetchBoard?.contents)}
      />
      <br />
      <BlueButton
        rrr="15px"
        qqq="yellow"
        zzz={props.mycolor}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </>
  );
}
