import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup.string().required("비밀번호는 필수 입력입니다."),
});
