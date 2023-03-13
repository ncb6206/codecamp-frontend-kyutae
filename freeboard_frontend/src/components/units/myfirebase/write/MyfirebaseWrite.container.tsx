import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import MyfirebaseWriteUI from "./MyfirebaseWrite.presenter";
import { useState, ChangeEvent } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useRouter } from "next/router";

export default function MyfirebaseWrite() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event?.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event?.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event?.target.value);
  };

  const onClickBoard = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    void (await addDoc(board, {
      writer,
      title,
      contents,
    }));

    alert("게시물등록 완료!");
    void router.push("/myfirebase");
  };

  return (
    <MyfirebaseWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickBoard={onClickBoard}
    />
  );
}
