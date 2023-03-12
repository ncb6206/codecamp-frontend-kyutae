import * as S from "./OpenapiList.styles";
import { IOpenApiListUIProps } from "./OpenapiList.types";

export default function OpenApiListUI(props: IOpenApiListUIProps) {
  return (
    <S.OpenApiWrapper>
      <S.DogImgWrapper>
        {props.imgUrls.map((el) => (
          <>
            <S.DogImg key={el} src={el} />
          </>
        ))}
      </S.DogImgWrapper>
    </S.OpenApiWrapper>
  );
}
