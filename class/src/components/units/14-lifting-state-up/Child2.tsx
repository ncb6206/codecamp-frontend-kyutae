export default function Child2(props: any) {
  // 부모의 state 조작 방법 - 2
  const onClick = () => {
    props.setCount((prev: number) => prev + 1);
  };

  return (
    <>
      <div>자식2의 카운트 : {props.count}</div>
      <button onClick={onClick}>카운트 올리기!!!</button>
    </>
  );
}
