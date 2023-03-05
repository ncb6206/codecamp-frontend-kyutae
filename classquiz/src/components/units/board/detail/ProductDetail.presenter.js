import styled from "@emotion/styled";

const SetProduct = styled.div``;
const WrapperProduct = styled.div``;
const ProductList = styled.div``;

export default function ProductDetailPageUI({ productId, data }) {
  return (
    <>
      <SetProduct>{productId}번 상품으로 등록이 완료되었습니다.</SetProduct>
      {data ? (
        <WrapperProduct>
          <ProductList>판매자 : {data?.fetchProduct.seller}</ProductList>
          <ProductList>상품명 : {data?.fetchProduct.name}</ProductList>
          <ProductList>상품내용 : {data?.fetchProduct.detail}</ProductList>
          <ProductList>상품가격 : {data?.fetchProduct.price}</ProductList>
        </WrapperProduct>
      ) : (
        <WrapperProduct>loading...</WrapperProduct>
      )}
    </>
  );
}
