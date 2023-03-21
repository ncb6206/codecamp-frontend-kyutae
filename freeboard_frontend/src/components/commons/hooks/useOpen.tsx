import { useState } from "react";

export function useOpen() {
  const [isOpen, SetIsOpen] = useState(false);

  const onToggleModal = () => {
    SetIsOpen((prev) => !prev);
  };

  return { isOpen, onToggleModal };
}
