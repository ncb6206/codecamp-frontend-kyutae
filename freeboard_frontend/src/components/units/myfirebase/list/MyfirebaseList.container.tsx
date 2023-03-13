import MyfirebaseListUI from "./MyfirebaseList.presenter";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { firebaseApp } from "../../../../commons/libraries/firebase";

export default function MyfirebaseList() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      // firebase store의 board 컬렉션을 가지고 오는 부분
      const board = collection(getFirestore(firebaseApp), "board");
      // 게시글 가지고 오기
      const result = await getDocs(board);
      // 받아온 게시글 하나씩 뽑아오기
      const datas = result.docs.map((el) => el.data());
      // DataBoards의 state 바꿔주기
      setData(datas);
    };

    void fetchBoards();
  }, []);

  const onClickMoveToBoardNew = () => {
    void router.push("myfirebase/new");
  };
  return <MyfirebaseListUI data={data} onClickMoveToBoardNew={onClickMoveToBoardNew} />;
}
