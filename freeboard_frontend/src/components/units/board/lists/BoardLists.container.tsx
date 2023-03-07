import { MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardLists.presenter";
import { FETCH_BOARDS } from "./BoardLists.queries";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
