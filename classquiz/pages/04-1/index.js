import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [title, setTitle] = useState("");

  const onClickAsync = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickAsync}>Rest-API요청하기</button>
      <div>{title}</div>
    </>
  );
}
