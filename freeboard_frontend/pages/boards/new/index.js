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
} from "../../../styles/emotion";

export default function BoardWriteUI() {
  // 여기는 자바스크립트 쓰는곳

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요" />
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password type="password" placeholder="비밀번호를 입력해주세요" />
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents type="text" placeholder="내용을 작성해주세요." />
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <ZipCodeWrapper>
          <Zipcode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </ZipCodeWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
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
        <SubmitButton>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
