import Upload01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./MarketWrite.styles";
import { IMarketWriteUIProps } from "./MarketWrite.types";
import { v4 as uuidv4 } from "uuid";

export default function MarketWriteUI(props: IMarketWriteUIProps) {
  return (
    <S.Wrapper
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickEdit)
          : props.handleSubmit(props.onClickMarketWrite)
      }
    >
      <S.Title>{props.isEdit ? "상품 수정하기" : "상품 등록하기"}</S.Title>
      <S.InputWrapper>
        <S.Label>상품명</S.Label>
        <S.Name type="text" placeholder="상품명을 작성해주세요." {...props.register("name")} />
        <S.ErrorMessage>{props.formState.errors.name?.message}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>한줄요약</S.Label>
        <S.Remarks
          type="text"
          placeholder="한줄요약을 작성해주세요."
          {...props.register("remarks")}
        />
        <S.ErrorMessage>{props.formState.errors.remarks?.message}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>상품설명</S.Label>
        <S.Contents
          style={{ height: "20rem", marginBottom: "3rem" }}
          placeholder="상품을 설명해주세요."
          onChange={props.onChangeContents}
        />
        <S.ErrorMessage>{props.formState.errors.contents?.message}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>판매 가격</S.Label>
        <S.Price type="text" placeholder="판매 가격을 입력해주세요." {...props.register("price")} />
        <S.ErrorMessage>{props.formState.errors.price?.message}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>태그 입력</S.Label>
        {/* <S.Price type="text" placeholder="#태그 #태그 #태그" {...props.register("tags")} /> */}
      </S.InputWrapper>
      <S.TradingLocationWrapper>
        <S.LocationWrapper>
          <S.Label>거래위치</S.Label>
          <S.LocationMap></S.LocationMap>
        </S.LocationWrapper>
        <S.AddressGPSWrapper>
          <S.Label>GPS</S.Label>
          {/* <S.GPSWrapper>
            <S.GpsLat type="text" placeholder="위도(LAT)" {...props.register("tags")} />
            <S.LocationIcon src="/images/locationIcon.png" />
            <S.GpsLng type="text" placeholder="경도(LNG)" {...props.register("tags")} />
          </S.GPSWrapper> */}
          <S.Label>주소</S.Label>
          {/* <S.Address type="text" readOnly {...props.register("useditemAddress.address")} />
          <S.Address type="text" {...props.register("useditemAddress.addressDetail")} /> */}
        </S.AddressGPSWrapper>
      </S.TradingLocationWrapper>
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
        <S.Label>메인 사진 설정</S.Label>
        <S.RadioButton type="radio" name="main" value="picture1" id="picture1" checked />
        <S.RadioLabel htmlFor="picture1">사진 1</S.RadioLabel>
        <S.RadioButton type="radio" name="main" value="picture2" id="picture2" />
        <S.RadioLabel htmlFor="picture2">사진 2</S.RadioLabel>
      </S.OptionWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton isActive={props.isEdit ? true : props.isActive}>
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
