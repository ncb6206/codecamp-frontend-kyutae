import styled from "@emotion/styled";
import { IQuery } from "../../../commons/types/generated/types";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

interface PaginationChild1Props {
  data?: Pick<IQuery, "fetchBoards">;
}

export default function PaginationChild1(props: PaginationChild1Props) {
  return (
    <>
      {props.data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}
    </>
  );
}
