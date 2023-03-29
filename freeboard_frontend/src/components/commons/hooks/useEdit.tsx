import { useState } from "react";

export function useEdit() {
  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdate = () => {
    setIsEdit((prev) => !prev);
  };

  return { isEdit, onClickUpdate };
}
