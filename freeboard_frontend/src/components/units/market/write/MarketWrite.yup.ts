import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명은 필수 입력입니다."),
  remarks: yup.string().required("한줄요약은 필수 입력입니다."),
  contents: yup.string().required("내용은 필수 입력입니다."),
  price: yup.number().required("판매 가격은 필수 입력입니다."),
  tags: yup.array().of(yup.string().matches(/^#[\w\d가-힣]*/g, "")),
  useditemAddress: yup.array().of(
    yup.object().shape({
      zipcode: yup.string(),
      address: yup.string(),
      addressDetail: yup.string(),
    })
  ),
  images: yup.array().of(yup.string()),
});
