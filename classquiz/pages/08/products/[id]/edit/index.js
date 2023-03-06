import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import ProductWritePage from "@/src/components/units/board/write/ProductWrite.container";
import { FETCH_PRODUCT } from "@/src/components/units/board/detail/ProductDetail.queries";

export default function ProductEdit() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  return <ProductWritePage isTrue={true} data={data} />;
}
