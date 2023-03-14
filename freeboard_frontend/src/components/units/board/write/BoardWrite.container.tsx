import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import type { BoardAddress, IBoardWriteProps, ImyUpdateBoardInput } from "./BoardWrite.types";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", ""]);

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

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    const newFileUrl = [...imageUrls];
    newFileUrl[index] = fileUrl;
    setImageUrls(newFileUrl);
  };

  const onToggleModal = () => {
    SetIsOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (address: Address) => {
    setAddress(address.address);
    setZipcode(address.zonecode);
    SetIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (props.data?.fetchBoard?.images?.length) {
      setImageUrls([...props.data?.fetchBoard?.images]);
    }
  }, []);

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
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: imageUrls,
            },
          },
        });

        if (typeof result.data?.createBoard?._id !== "string") {
          Modal.error({ content: "일시적인 오류가 있습니다. 다시 시도해 주세요." });
          return;
        }

        console.log(result);
        Modal.success({ content: "게시글이 등록되었습니다!!" });
        void router.push(`/boards/${result.data?.createBoard?._id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  const onClickEdit = async () => {
    const currentFiles = JSON.stringify(imageUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard?.images);
    const isChangeFiles = currentFiles !== defaultFiles;

    if (
      !title &&
      !contents &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode &&
      !isChangeFiles
    ) {
      Modal.info({ content: " 수정한 내용이 없습니다." });
      return;
    }

    if (!password) {
      Modal.error({ content: " 비밀번호를 입력해주세요!" });
      return;
    }

    const myUpdateBoardInput: ImyUpdateBoardInput = {};
    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      const boardAddress: BoardAddress = {};
      if (zipcode) boardAddress.zipcode = zipcode;
      if (address) boardAddress.address = address;
      if (addressDetail) boardAddress.addressDetail = addressDetail;
    }
    if (isChangeFiles) myUpdateBoardInput.images = imageUrls;

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password,
          updateBoardInput: myUpdateBoardInput,
        },
      });
      if (typeof result.data?.updateBoard?._id !== "string") {
        Modal.error({ content: "일시적인 오류가 있습니다. 다시 시도해 주세요." });
        return;
      }
      console.log(result);
      Modal.success({ content: "게시글이 수정되었습니다!!" });
      void router.push(`/boards/${result.data?.updateBoard?._id}`);
    } catch (error: any) {
      Modal.error({ content: error.message });
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
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFileUrl={onChangeFileUrl}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onToggleModal={onToggleModal}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isActive={isActive}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      isEdit={props.isEdit}
      data={props.data}
      imageUrls={imageUrls}
    />
  );
}
