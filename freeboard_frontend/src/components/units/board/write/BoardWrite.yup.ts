import * as yup from "yup";

export const schema = yup.object({
  writer: yup.string().required("작성자는 필수 입력입니다."),
  password: yup.string().required("비밀번호는 필수 입력입니다."),
  title: yup.string().required("제목은 필수 입력입니다."),
  contents: yup.string().required("내용은 필수 입력입니다."),
});
