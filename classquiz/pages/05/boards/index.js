import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
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
      router.push(`/05/boards/${result.data.createProduct._id}`);
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
    <>
      판매자 : <input type="text" onChange={onChangeSeller} />
      <br />
      상품명 : <input type="text" onChange={onChangeName} />
      <br />
      상품내용 : <input type="text" onChange={onChangeDetail} />
      <br />
      상품가격 : <input type="text" onChange={onChangePrice} />
      <br />
      <button onClick={onClickSubmit}>상품등록</button>
    </>
  );
}
