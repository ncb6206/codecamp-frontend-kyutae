// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  // ReactQuill 만든 사람들이 만든 onChange 이므로 event 안들어옴
  const onChangeContents = (value: string) => {
    console.log(value);
  };

  const onClickSubmit = () => {
    //     const { Modal } = dynamic(async () => await import("antd"), { ssr: false });  // code-splitting(코드스플릿팅)
    //     Modal.success({ content: "등록에 성공하였습니다" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      작성자: <input type="text" />
      비밀번호: <input type="password" />
      제목: <input type="text" />
      내용: <ReactQuill onChange={onChangeContents} />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
