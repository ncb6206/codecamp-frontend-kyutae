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
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const datas = result.docs.map((el) => el.data());
      setData(datas);
    };

    void fetchBoards();
  }, []);

  const onClickMoveToBoardNew = () => {
    void router.push("myfirebase/new");
  };
  return <MyfirebaseListUI data={data} onClickMoveToBoardNew={onClickMoveToBoardNew} />;
}
