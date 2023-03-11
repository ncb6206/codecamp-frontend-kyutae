import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Board = styled.div`
  margin: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function StaticRoutedPage() {
  const [myIndex, setMyIndex] = useState(5);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {index !== myIndex && (
            <Row>
              <Board>{el.writer}</Board>
              <Board>{el.title}</Board>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </Row>
          )}
          {index === myIndex && (
            <div>
              수정할 내용 : <input type="text" />
            </div>
          )}
        </div>
      ))}
    </>
  );
}
