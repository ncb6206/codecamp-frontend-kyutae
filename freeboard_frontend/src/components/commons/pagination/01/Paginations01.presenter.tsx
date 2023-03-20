import * as S from "../01/Paginations01.styles";
import { Paginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: Paginations01UIProps) {
  return (
    <div>
      <S.LeftIcon onClick={props.onClickPrevPage} />
      {new Array(10)
        .fill(1)
        .filter((_, index) => index + props.startPage <= props.lastPage)
        .map((_, index) => (
          <S.BoardList
            key={index + props.startPage}
            id={String(index + props.startPage)}
            onClick={props.onClickPage(index + props.startPage)}
            isActive={props.startPage + index === props.activedPage}
          >
            {index + props.startPage}
          </S.BoardList>
        ))}
      <S.RightIcon onClick={props.onClickNextPage} />
    </div>
  );
}
