import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [mycolor, setMycolor] = useState(false);
  // 자바스크립트 영역
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data?.createBoard?.message);
    router.push(`/10-01-typescript-boards/${result.data?.createBoard?.number}`);
  };

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = {
      number: Number(router.query.number),
    };
    if (writer) myVariables.writer = writer;
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    // 1. 수정하기 뮤테이션 날리기
    const result = await updateBoard({
      variables: myVariables,
    });
    // 2. 상세페이지로 이동하기
    console.log(result);
    alert(result.data?.updateBoard?.message);
    router.push(`/10-01-typescript-boards/${result.data?.updateBoard?.number}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setMycolor(true);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setMycolor(true);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setMycolor(true);
    }
  };

  // HTML 영역(return 아래)
  return (
    <BoardWriteUI
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      mycolor={mycolor}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
