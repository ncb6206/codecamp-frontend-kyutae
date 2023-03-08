import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation<Pick<IMutation, "deleteBoard">, IMutationDeleteBoardArgs>(
    DELETE_BOARD
  );
  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);
  const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(
    DISLIKE_BOARD
  );

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: {
      boardId: String(router.query.boardId),
    },
  });

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
      });
      alert("삭제되었습니다!");
      await router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickMoveToBoardList = async () => {
    await router.push("/boards");
  };

  const onClickEdit = async () => {
    await router.push(`/boards/${String(router.query.boardId)}/edit`);
  };

  const onClickLike = async () => {
    try {
      await likeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickDislike = async () => {
    try {
      await dislikeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
