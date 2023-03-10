import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../src/commons/types/generated/types";
import PaginationChild1 from "../../src/components/commons/pagination/PaginationChild1";
import PaginationChild2 from "../../src/components/commons/pagination/PaginationChild2";

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickPage = async (event: MouseEvent<HTMLSpanElement>) => {
    await refetch({ page: Number(event?.currentTarget.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage(startPage + 10);
    refetch({ page: startPage + 10 });
  };

  const lastPage = dataBoardsCount ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10) : 0;

  return (
    <>
      <PaginationChild1 data={data} />

      <PaginationChild2
        onClickPrevPage={onClickPrevPage}
        onClickNextPage={onClickNextPage}
        onClickPage={onClickPage}
        startPage={startPage}
        lastPage={lastPage}
      />

      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={String(el)} onClick={onClickPage}>
          {el}
        </span>
      ))} */}

      {/* <span id="1" onClick={onClickPage}>
        1
      </span>
      <span id="2" onClick={onClickPage}>
        2
      </span>
      <span id="3" onClick={onClickPage}>
        3
      </span> */}
    </>
  );
}
