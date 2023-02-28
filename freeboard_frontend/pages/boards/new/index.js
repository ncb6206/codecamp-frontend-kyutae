import { useState } from "react";
import {
  Wrapper,
  WriterWrapper,
  Title,
  Zipcode,
  Youtube,
  Password,
  InputWrapper,
  Writer,
  Label,
  Subject,
  Contents,
  ZipCodeWrapper,
  SearchButton,
  Address,
  SubmitButton,
  ImageWrapper,
  UploadButton,
  OptionWrapper,
  RadioLabel,
  RadioButton,
  ButtonWrapper,
  ErrorMessage,
} from "../../../styles/emotion";

export default function BoardWriteUI() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const changeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };
  const changeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };
  const changeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const onClickSubmit = () => {
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
      alert("게시글이 등록되었습니다.");
    }
  };

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요" onChange={changeWriter} />
          <ErrorMessage>{writerError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={changePassword}
          />
          <ErrorMessage>{passwordError}</ErrorMessage>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." onChange={changeTitle} />
        <ErrorMessage>{titleError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents type="text" placeholder="내용을 작성해주세요." onChange={changeContents} />
        <ErrorMessage>{contentsError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipCodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipCodeWrapper>
        <Address />
        <ErrorMessage></ErrorMessage>
        <Address />
        <ErrorMessage></ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
        <ErrorMessage></ErrorMessage>
      </InputWrapper>
      <ImageWrapper>
        <Label>사진 첨부</Label>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
        <UploadButton>+</UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인 설정</Label>
        <RadioButton type="radio" name="main" value="youtube" id="youtube" checked />
        <RadioLabel for="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" name="main" value="picture" id="picture" />
        <RadioLabel for="picture">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
