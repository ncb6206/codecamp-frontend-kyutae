import styled from "@emotion/styled";

const InputProduct = styled.input``;
const Button = styled.button``;

export default function ProductWritePageUI({
  onChangeDetail,
  onChangeName,
  onChangePrice,
  onChangeSeller,
  onClickSubmit,
  onClickEdit,
  isTrue,
  data,
}) {
  return (
    <>
      판매자 :{" "}
      <InputProduct
        type="text"
        onChange={onChangeSeller}
        defaultValue={data?.fetchProduct.seller}
      />
      <br />
      상품명 :{" "}
      <InputProduct type="text" onChange={onChangeName} defaultValue={data?.fetchProduct.name} />
      <br />
      상품내용 :{" "}
      <InputProduct
        type="text"
        onChange={onChangeDetail}
        defaultValue={data?.fetchProduct.detail}
      />
      <br />
      상품가격 :{" "}
      <InputProduct type="text" onChange={onChangePrice} defaultValue={data?.fetchProduct.price} />
      <br />
      <Button onClick={isTrue ? onClickEdit : onClickSubmit}>
        {isTrue ? "상품수정" : "상품등록"}
      </Button>
    </>
  );
}
