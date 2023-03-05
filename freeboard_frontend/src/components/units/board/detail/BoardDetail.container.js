import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.boardId,
        },
      });
      alert("삭제되었씁니다!");
      router.push(`/boards`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return <BoardDetailUI data={data} onClickDelete={onClickDelete} />;
}
