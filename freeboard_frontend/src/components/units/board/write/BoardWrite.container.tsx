import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
// prettier-ignore
import type {IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs} from "../../../../commons/types/generated/types";
// prettier-ignore
import type {BoardAddress, IBoardData, IBoardWriteProps, ImyUpdateBoardInput} from "./BoardWrite.types";
import { Address } from "react-daum-postcode/lib/loadPostcode";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./BoardWrite.yup";
import { useForm } from "react-hook-form";
import { FETCH_BOARD } from "../detail/BoardDetail.queries";
import { useOpen } from "../../../commons/hooks/useOpen";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { isOpen, onToggleModal } = useOpen();

  const { register, handleSubmit, formState } = useForm<IBoardData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState(["", "", ""]);

  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );

  const onChangeFileUrl = (imageUrl: string, fileUrl: string, index: number) => {
    const newFiles = [...files];
    newFiles[index] = imageUrl;
    setFiles(newFiles);
    console.log(files);

    const newFileUrl = [...imageUrls];
    newFileUrl[index] = fileUrl;
    setImageUrls(newFileUrl);
    console.log(imageUrls);
  };

  const onCompleteAddressSearch = (address: Address) => {
    setAddress(address.address);
    setZipcode(address.zonecode);
    onToggleModal();
  };

  useEffect(() => {
    if (props.data?.fetchBoard?.images?.length) {
      setImageUrls([...props.data?.fetchBoard?.images]);
    }
  }, []);

  const onClickSubmit = async (data: IBoardData) => {
    const { writer, password, title, contents, youtubeUrl } = data;
    const { addressDetail } = data.boardAddress;
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
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
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
  };

  const onClickEdit = async (data: IBoardData) => {
    const currentFiles = JSON.stringify(imageUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard?.images);
    const isChangeFiles = currentFiles !== defaultFiles;

    const { password, title, contents, youtubeUrl } = data;
    const { addressDetail } = data.boardAddress;

    // prettier-ignore
    if (!title && !contents && !youtubeUrl && !address && !addressDetail && !zipcode && !isChangeFiles) {
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
    if (zipcode ?? address ?? addressDetail) {
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
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
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
      onChangeFileUrl={onChangeFileUrl}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onToggleModal={onToggleModal}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isActive={isActive}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      isEdit={props.isEdit}
      data={props.data}
      imageUrls={imageUrls}
    />
  );
}
