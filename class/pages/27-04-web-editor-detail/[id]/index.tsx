import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  // const { writer, title, contents } = data.fetchBoard;
  // console.log(data, writer, title, contents);
  console.log(data);

  // const onClickMoveToEdit = () => {
  //   router.push(`/09-01-boards/${router.query.number}/edit`);
  // };

  return (
    <>
      {/* <div>{router.query.number}번 게시글로 이동이 완료되었습니다.</div> */}
      <div>작성자 : {data ? data.fetchBoard.writer : "로딩중입니다..."}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      내용 :{" "}
      {typeof window !== "undefined" && (
        <div
          dangerouslySetInnerHTML={{ __html: Dompurify.sanitize(data?.fetchBoard.contents) }}
        ></div>
      )}
      {/* <button onClick={onClickMoveToEdit}>수정하러 이동하기</button> */}
    </>
  );
}

// playground XSS 공격
// <img src="#" onerror="const aaa = localStorage.getItem('accessToken'); console.log(aaa);" />
