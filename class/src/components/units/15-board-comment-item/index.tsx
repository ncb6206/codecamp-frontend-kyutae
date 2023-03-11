import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard } from "../../../commons/types/generated/types";

const Board = styled.div`
  margin: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

interface IProps {
  el: IBoard;
}

export default function BoardCommentItem(props: IProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit && (
        <Row>
          <Board>{props.el.writer}</Board>
          <Board>{props.el.title}</Board>
          <button onClick={onClickEdit}>수정하기</button>
        </Row>
      )}
      {isEdit && (
        <div>
          수정할 내용 : <input type="text" />
        </div>
      )}
    </div>
  );
}
