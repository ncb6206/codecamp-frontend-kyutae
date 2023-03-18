import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("닉네임을 입력해 주세요"),
  email: yup
    .string()
    .email("이메일 형식에 적합하지 않습니다.")
    .required("이메일은 필수 입력입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/g,
      "비밀번호는 영문자, 특수문자, 숫자를 하나씩은 포함해야합니다"
    )
    .required("비밀번호는 필수 입력입니다."),
});
