import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./ProductDetail.queries";
import ProductDetailPageUI from "./ProductDetail.presenter";

export default function ProductDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  console.log(data);

  return <ProductDetailPageUI productId={router.query.id} data={data} />;
}
