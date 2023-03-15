import { gql, useQuery } from "@apollo/client";

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

export default function FetchPolicyPage() {
  const { data } = useQuery(FETCH_BOARDS, { fetchPolicy: "cache-first" });

  return (
    <>
      {data?.fetchboards.map((el) => {
        <div key={el}>{el.title}</div>;
      })}
    </>
  );
}
