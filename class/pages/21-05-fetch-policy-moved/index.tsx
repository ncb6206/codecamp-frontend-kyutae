import { gql, useQuery } from "@apollo/client";
import FetchPolicyPage from "../../src/components/units/21-fetch-policy";
import { useState } from "react";

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

export default function GlobalStatePage() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={onClickIsOpen}>버튼을 클릭하면 새로운 컴포넌트가 나타납니다!</button>
      {isOpen && <FetchPolicyPage />}
    </div>
  );
}
