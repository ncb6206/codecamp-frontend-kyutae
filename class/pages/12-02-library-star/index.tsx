import { useState } from "react";
import styled from "@emotion/styled";
import { Rate } from "antd";

const MyStar = styled(Rate)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  const qqq = (value: number) => setValue(value);

  // (value) => setValue(value) 는 setValue로 줄일 수 있다

  return (
    <div id="rrrrrr">
      <MyStar onChange={qqq} />
    </div>
  );
}
