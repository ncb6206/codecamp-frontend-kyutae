export default function ProductWritePageUI({
  onChangeDetail,
  onChangeName,
  onChangePrice,
  onChangeSeller,
  onClickSubmit,
}) {
  return (
    <>
      판매자 : <input type="text" onChange={onChangeSeller} />
      <br />
      상품명 : <input type="text" onChange={onChangeName} />
      <br />
      상품내용 : <input type="text" onChange={onChangeDetail} />
      <br />
      상품가격 : <input type="text" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>상품등록</button>
    </>
  );
}
