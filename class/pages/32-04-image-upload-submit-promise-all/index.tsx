import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage() {
  // const [imageUrl, setImageUrl] = useState("");
  // const [file, setFile] = useState<File>();
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(
    UPLOAD_FILE
  );
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    // 1. Promise.all 안썼을 때
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2]; // [dog1.jpg, dog2.jpg, dog3.jpg]

    // //
    // //
    // // 2. Promise.all 썼을 때
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // [resultFile0, resultFile1, resultFile2]
    // const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog1.jpg, dog2.jpg, dog3.jpg]

    //
    //
    // 3. Promise.all 썼을 때(리팩토링)
    // files - [File0, File1, File2]
    // files.map(el => uploadFile({ variables: { file: files[0] } })) // [uploadFile({ ... : File0}), uploadFile({ ... : File1}), uploadFile({ ... : File2})]
    const results = await Promise.all([files.map((el) => uploadFile({ variables: { file: el } }))]);
    console.log(results); // [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog1.jpg, dog2.jpg, dog3.jpg]

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "안녕하세요",
          contents: "반갑습니다",
          images: resultUrls, // [url0, url1, url2]
        },
      },
    });
    console.log(result);
    Modal.success({ content: "전송이 완료되었습니다!" });
  };

  const onChangeFile = (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // <input type="file" multiple /> 에서 multiple 속성으로 여러개 드래그 가능
    if (!file) return;
    console.log(file);

    // try {
    //   const result = await uploadFile({ variables: { file } });
    //   console.log(result.data?.uploadFile.url);
    //   setImageUrl(result.data?.uploadFile.url || "");
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }

    // 1. 임시 URL 생성 - (가짜URL - 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // console.log(result);
    // setImageUrl(result);

    // 2. 임시 URL 생성 - (진짜URL - 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result); // 게시판에서 event.target.id 대신 event.currentTarget.id를 썼던 이유 : event.target은 태그만을 가르키지 않음
        // setImageUrl(event.target?.result);
        // setFile(file);

        const tempUrls = [...imageUrls];
        tempUrls[index] = event.target?.result;
        setImageUrls(tempUrls);

        const tempFiles = [...files];
        tempFiles[index] = file;
        setFiles(tempFiles);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} /* multiple */ />
      <input type="file" onChange={onChangeFile(1)} /* multiple */ />
      <input type="file" onChange={onChangeFile(2)} /* multiple */ />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
