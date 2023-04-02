import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardLists.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardLists.queries";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { useSearch } from "../../../commons/hooks/useSearch";

export default function BoardList() {
  const { onClickMoveToPage } = useMoveToPage();
  const { keyword, onChangeKeyword } = useSearch();

  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  return (
    <BoardListUI
      data={data}
      count={dataBoardsCount?.fetchBoardsCount}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      onClickMoveToPage={onClickMoveToPage}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword}
    />
  );
}
