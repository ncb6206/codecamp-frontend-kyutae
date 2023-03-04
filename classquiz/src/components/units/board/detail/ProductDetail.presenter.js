export default function ProductDetailPageUI({ productId, data }) {
  return (
    <>
      <div>{productId}번 상품으로 등록이 완료되었습니다.</div>
      {data ? (
        <div>
          <div>판매자 : {data?.fetchProduct.seller}</div>
          <div>상품명 : {data?.fetchProduct.name}</div>
          <div>상품내용 : {data?.fetchProduct.detail}</div>
          <div>상품가격 : {data?.fetchProduct.price}</div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
