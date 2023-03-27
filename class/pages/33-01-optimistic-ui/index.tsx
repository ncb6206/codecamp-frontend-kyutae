import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: "하드코딩하기" },
  });

  const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(LIKE_BOARD);

  const onClickLike = () => {
    void likeBoard({
      variables: { boardId: "하드코딩하기" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "하드코딩하기" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount ?? 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "하드코딩하기" },
          data: {
            fetchBoard: {
              _id: "하드코딩하기",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>현재카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike}>좋아요 올리기!!</button>
    </>
  );
}
