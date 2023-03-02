import { gql, useMutation } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "철수", title: "제목입니다~~", contents: "내용이에요~~") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
    </>
  );
}
