import * as S from "./BoardWrite.styles";

export default function BoardWriteUI({
  onChangeContents,
  onChangePassword,
  onChangeTitle,
  onChangeWriter,
  onClickSubmit,
  writerError,
  passwordError,
  titleError,
  contentsError,
  isTrue,
}) {
  return (
    <S.Wrapper>
      <S.Title>게시물 등록</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer type="text" placeholder="이름을 적어주세요" onChange={onChangeWriter} />
          <S.ErrorMessage>{writerError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePassword}
          />
          <S.ErrorMessage>{passwordError}</S.ErrorMessage>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
        <S.ErrorMessage>{titleError}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents type="text" placeholder="내용을 작성해주세요." onChange={onChangeContents} />
        <S.ErrorMessage>{contentsError}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          <S.Zipcode placeholder="07250" />
          <S.SearchButton>우편번호 검색</S.SearchButton>
        </S.ZipCodeWrapper>
        <S.Address />
        <S.ErrorMessage></S.ErrorMessage>
        <S.Address />
        <S.ErrorMessage></S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube placeholder="링크를 복사해주세요." />
        <S.ErrorMessage></S.ErrorMessage>
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
        <S.UploadButton>+</S.UploadButton>
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인 설정</S.Label>
        <S.RadioButton type="radio" name="main" value="youtube" id="youtube" checked />
        <S.RadioLabel for="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" name="main" value="picture" id="picture" />
        <S.RadioLabel for="picture">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton onClick={onClickSubmit} isTrue={isTrue}>
          등록하기
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
