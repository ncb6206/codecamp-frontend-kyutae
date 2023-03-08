import type { MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardLists.presenter";
import { FETCH_BOARDS } from "./BoardLists.queries";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const onClickMoveToBoardNew = async () => {
    await router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = async (event: MouseEvent<HTMLDivElement>) => {
    await router.push(`/boards/${event.currentTarget.id}`);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
