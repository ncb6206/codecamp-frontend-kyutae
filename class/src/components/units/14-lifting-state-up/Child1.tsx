export default function Child1(props: any) {
  return (
    <>
      <div>자식1의 카운트: {props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
