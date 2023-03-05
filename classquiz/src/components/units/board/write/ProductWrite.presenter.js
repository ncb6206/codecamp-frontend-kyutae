import styled from "@emotion/styled";

const InputProduct = styled.input``;
const Button = styled.button``;

export default function ProductWritePageUI({
  onChangeDetail,
  onChangeName,
  onChangePrice,
  onChangeSeller,
  onClickSubmit,
}) {
  return (
    <>
      판매자 : <InputProduct type="text" onChange={onChangeSeller} />
      <br />
      상품명 : <InputProduct type="text" onChange={onChangeName} />
      <br />
      상품내용 : <InputProduct type="text" onChange={onChangeDetail} />
      <br />
      상품가격 : <InputProduct type="text" onChange={onChangePrice} />
      <br />
      <Button onClick={onClickSubmit}>상품등록</Button>
    </>
  );
}
