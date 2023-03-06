import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from "@/src/components/units/board/write/ProductWrite.queries";
import ProductWritePageUI from "./ProductWrite.presenter";

export default function ProductWritePage(props) {
  const router = useRouter();

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const onClickSubmit = async (props) => {
    try {
      const result = await createProduct({
        // variables 이게 $ 역할을 해줌
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      console.log(result);
      alert(result.data.createProduct.message);
      router.push(`/08/products/${result.data.createProduct._id}`);
    } catch (error) {
      //try에 있는 내용을 시도하다가 실패하면, 아랫줄 모두 무시!!! 하고 catch가 실행됨
      console.log(error.message);
      alert(error.message);
    }
  };

  const onClickEdit = async (props) => {
    const myUpdateProductInput = {};

    if (name) myUpdateProductInput.name = name;
    if (detail) myUpdateProductInput.detail = detail;
    if (price) myUpdateProductInput.price = Number(price);

    try {
      const result = await updateProduct({
        // variables 이게 $ 역할을 해줌
        variables: {
          productId: router.query.id,
          updateProductInput: myUpdateProductInput,
        },
      });
      console.log(result);
      alert(result.data.updateProduct.message);
      router.push(`/08/products/${result.data.updateProduct._id}`);
    } catch (error) {
      //try에 있는 내용을 시도하다가 실패하면, 아랫줄 모두 무시!!! 하고 catch가 실행됨
      console.log(error.message);
      alert(error.message);
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <ProductWritePageUI
      onChangeSeller={onChangeSeller}
      onChangeDetail={onChangeDetail}
      onChangeName={onChangeName}
      onChangePrice={onChangePrice}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isTrue={props.isTrue}
      data={props.data}
    />
  );
}
