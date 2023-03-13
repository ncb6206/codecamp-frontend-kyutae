import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      {props.isOpen && (
        <S.AddressModal
          title="주소 설정"
          open={true}
          onOk={props.onToggleModal}
          onCancel={props.onToggleModal}
        >
          <S.ZipcodeInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.Writer
            type="text"
            placeholder="이름을 적어주세요"
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer || ""}
            readOnly={!!props.data?.fetchBoard.writer}
          />
          <S.ErrorMessage>{props.writerError}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangePassword}
          />
          <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.ErrorMessage>{props.titleError}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.ErrorMessage>{props.contentsError}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          <S.Zipcode
            readOnly
            value={props.zipcode || props.data?.fetchBoard?.boardAddress?.zipcode || ""}
            placeholder="07250"
          />
          <S.SearchButton onClick={props.onToggleModal}>우편번호 검색</S.SearchButton>
        </S.ZipCodeWrapper>
        <S.Address
          readOnly
          value={props.address || props.data?.fetchBoard.boardAddress?.address || ""}
        />
        <S.ErrorMessage></S.ErrorMessage>
        <S.Address
          onChange={props.onChangeAddressDetail}
          defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail || ""}
        />
        <S.ErrorMessage></S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          onChange={props.onChangeYoutubeUrl}
          placeholder="링크를 복사해주세요."
          defaultValue={props.data?.fetchBoard?.youtubeUrl || ""}
        />
        <S.ErrorMessage></S.ErrorMessage>
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진 첨부</S.Label>
        <S.UploadButton onClick={props.onClickImage}>+</S.UploadButton>
        <S.UploadFile type="file" ref={props.fileRef} onChange={props.onChangeFile} />
        {!!props.imageUrl && (
          <S.UploadImage src={`https://storage.googleapis.com/${props.imageUrl}`} />
        )}
        <S.UploadButton onClick={props.onClickImage}>+</S.UploadButton>
        <S.UploadFile type="file" ref={props.fileRef} onChange={props.onChangeFile} />
        {!!props.imageUrl && (
          <S.UploadImage src={`https://storage.googleapis.com/${props.imageUrl}`} />
        )}
        <S.UploadButton onClick={props.onClickImage}>+</S.UploadButton>
        <S.UploadFile type="file" ref={props.fileRef} onChange={props.onChangeFile} />
        {!!props.imageUrl && (
          <S.UploadImage src={`https://storage.googleapis.com/${props.imageUrl}`} />
        )}
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인 설정</S.Label>
        <S.RadioButton type="radio" name="main" value="youtube" id="youtube" checked />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" name="main" value="picture" id="picture" />
        <S.RadioLabel htmlFor="picture">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
          isActive={props.isEdit ? true : props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
