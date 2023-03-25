import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent } from "react";
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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    await refetch({ page: Number(event?.currentTarget.id) });
  };

  return (
    <>
      {/* 임시 배열 10개를 생성하여, 데이터가 없을 때도 높이 30px을 유지하여 reflow방지 */}
      {(data?.fetchBoards ?? new Array(10).fill(1)).map((el) => (
        <Row key={el._id} style={{ height: "30px" }}>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
        </Row>
      ))}

      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
