import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      작성자 : <RedInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목 : <RedInput type="text" onChange={props.onChangeTitle} />
      <br />
      내용 : <RedInput type="text" onChange={props.onChangeContents} />
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
