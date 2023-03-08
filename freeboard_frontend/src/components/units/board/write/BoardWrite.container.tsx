import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import type { IBoardWriteProps, ImyUpdateBoardInput } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요!");
    }

    if (!password) {
      setPasswordError("비밀번호를 입력해주세요!");
    }

    if (!title) {
      setTitleError("작성자를 입력해주세요!");
    }

    if (!contents) {
      setContentsError("작성자를 입력해주세요!");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
            },
          },
        });
        console.log(result);
        alert("게시글이 등록되었습니다!!");
        await router.push(`/boards/${String(result.data?.createBoard?._id)}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    const myUpdateBoardInput: ImyUpdateBoardInput = {};
    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password,
          updateBoardInput: myUpdateBoardInput,
        },
      });
      console.log(result);
      alert("게시글이 수정되었씁니다!!");
      await router.push(`/boards/${String(result.data?.updateBoard?._id)}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
