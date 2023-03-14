import { MouseEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardLists.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardLists.queries";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickMoveToBoardNew = async () => {
    await router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = async (event: MouseEvent<HTMLDivElement>) => {
    await router.push(`/boards/${event.currentTarget.id}`);
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      count={dataBoardsCount?.fetchBoardsCount}
      refetchBoardsCount={refetchBoardsCount}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
      refetch={refetch}
    />
  );
}
