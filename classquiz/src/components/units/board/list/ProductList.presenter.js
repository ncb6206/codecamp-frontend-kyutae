import styled from "@emotion/styled";

const CheckBox = styled.input``;
const WrapperProduct = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProductList = styled.div``;
const Button = styled.button``;

export default function ProductListPageUI({ data, onClickDelete }) {
  return (
    <>
      {data.fetchProducts.map(
        (el = (
          <WrapperProduct key={el.number}>
            <ProductList>
              <CheckBox type="checkbox" />
            </ProductList>
            <ProductList>{el.number}</ProductList>
            <ProductList>{el.name}</ProductList>
            <ProductList>{el.contents}</ProductList>
            <ProductList>
              <Button id={el.number} onClick={onClickDelete}>
                삭제
              </Button>
            </ProductList>
          </WrapperProduct>
        ))
      )}
      {/* {data ? (
        <WrapperProduct>
          <ProductList>판매자 : {data?.fetchProduct.seller}</ProductList>
          <ProductList>상품명 : {data?.fetchProduct.name}</ProductList>
          <ProductList>상품내용 : {data?.fetchProduct.detail}</ProductList>
          <ProductList>상품가격 : {data?.fetchProduct.price}</ProductList>
        </WrapperProduct>
      ) : (
        <WrapperProduct>loading...</WrapperProduct>
      )} */}
    </>
  );
}
