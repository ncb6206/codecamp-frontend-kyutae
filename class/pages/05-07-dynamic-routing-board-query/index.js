import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/05-08-dynamic-routed-board-query/205351");
  };

  const onClickMove2 = () => {
    router.push("/05-08-dynamic-routed-board-query/213521");
  };

  const onClickMove3 = () => {
    router.push("/05-08-dynamic-routed-board-query/225351");
  };

  return (
    <div>
      <button onClick={onClickMove1}>205351번 게시글로 이동하기!!</button>
      <br />
      <button onClick={onClickMove2}>213521번 게시글로 이동하기!!</button>
      <br />
      <button onClick={onClickMove3}>225351번 게시글로 이동하기!!</button>
      <br />
    </div>
  );
}
