import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCTS, DELETE_PRODUCT } from "./ProductList.queries";
import ProductListPageUI from "./ProductList.presenter";

export default function ProductListPage() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = async (event) => {
    await deleteProduct({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return <ProductListPageUI data={data} onClickDelete={onClickDelete} />;
}
