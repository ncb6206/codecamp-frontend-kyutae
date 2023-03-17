import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedInpage() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");
    setBasketItems(baskets);
  }, []);

  return (
    <div>
      <h1>나만의 장바구니(비회원 전용!!)</h1>
      {basketItems.map((el: IBoard) => (
        <div key={el._id}>
          <span>작성자 : {el.writer}</span>
          <span>제목 : {el.title}</span>
        </div>
      ))}
    </div>
  );
}
