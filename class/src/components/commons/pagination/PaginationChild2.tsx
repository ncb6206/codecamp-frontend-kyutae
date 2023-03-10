export default function PaginationChild2(props) {
  return (
    <>
      <span onClick={props.onClickPrevPage}>이전페이지</span>
      {new Array(10)
        .fill(1)
        .filter((_, index) => index + props.startPage <= props.lastPage)
        .map((_, index) => (
          <span
            key={index + props.startPage}
            id={String(index + props.startPage)}
            onClick={props.onClickPage}
            style={{ margin: "0 0.5rem" }}
          >
            {index + props.startPage}
          </span>
        ))}
      <span onClick={props.onClickNextPage}>다음페이지</span>
    </>
  );
}
