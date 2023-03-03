import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      seller
      name
      detail
      price
    }
  }
`;

export default function StaticRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  console.log(data);

  return (
    <>
      <div>{router.query.id}번 상품으로 등록이 완료되었습니다.</div>
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
