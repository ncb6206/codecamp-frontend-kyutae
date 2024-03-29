import axios from "axios";
import { useState } from "react";

export default function IsSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [myData, setMyData] = useState<any>();

  // const {formState} = useForm;
  // formState.isSubmitting

  const onClickSubmit = async () => {
    setIsSubmitting(true);

    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setMyData(result);

    setIsSubmitting(false);
  };

  return (
    <button onClick={onClickSubmit} disabled={isSubmitting}>
      등록하기 동의 API 요청
    </button>
  );
}
