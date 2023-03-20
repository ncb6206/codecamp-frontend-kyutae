import Upload01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickEdit)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
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
            {...props.register("writer")}
            defaultValue={props.data?.fetchBoard.writer ?? ""}
            readOnly={!!props.data?.fetchBoard.writer}
          />
          <S.ErrorMessage>{props.formState.errors.writer?.message}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Password
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...props.register("password")}
          />
          <S.ErrorMessage>{props.formState.errors.password?.message}</S.ErrorMessage>
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.Label>제목</S.Label>
        <S.Subject
          type="text"
          placeholder="제목을 작성해주세요."
          {...props.register("title")}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.ErrorMessage>{props.formState.errors.title?.message}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>내용</S.Label>
        <S.Contents
          placeholder="내용을 작성해주세요."
          {...props.register("contents")}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.ErrorMessage>{props.formState.errors.contents?.message}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>
        <S.ZipCodeWrapper>
          <S.Zipcode
            readOnly
            value={props.zipcode ?? props.data?.fetchBoard?.boardAddress?.zipcode ?? ""}
            placeholder="07250"
            {...props.register("boardAddress.zipcode")}
          />
          <S.SearchButton type="button" onClick={props.onToggleModal}>
            우편번호 검색
          </S.SearchButton>
        </S.ZipCodeWrapper>
        <S.Address
          readOnly
          value={props.address ?? props.data?.fetchBoard.boardAddress?.address ?? ""}
          {...props.register("boardAddress.address")}
        />
        <S.ErrorMessage></S.ErrorMessage>
        <S.Address
          {...props.register("boardAddress.addressDetail")}
          defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}
        />
        <S.ErrorMessage></S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>유튜브</S.Label>
        <S.Youtube
          placeholder="링크를 복사해주세요."
          defaultValue={props.data?.fetchBoard?.youtubeUrl ?? ""}
          {...props.register("youtubeUrl")}
        />
        <S.ErrorMessage></S.ErrorMessage>
      </S.InputWrapper>
      <S.ImageWrapper>
        <S.Label>사진 첨부</S.Label>
        {props.imageUrls.map((el, index) => (
          <Upload01
            key={uuidv4()}
            index={index}
            fileUrl={el}
            onChangeFileUrl={props.onChangeFileUrl}
          />
        ))}
      </S.ImageWrapper>
      <S.OptionWrapper>
        <S.Label>메인 설정</S.Label>
        <S.RadioButton type="radio" name="main" value="youtube" id="youtube" checked />
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioButton type="radio" name="main" value="picture" id="picture" />
        <S.RadioLabel htmlFor="picture">사진</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton isActive={props.isEdit ? true : props.isActive}>
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
