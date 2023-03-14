import * as S from "./Searchbars01.styles";
import { ISearchBars01UIProps } from "./Searchbars01.types";

export default function SearchBars01UI(props: ISearchBars01UIProps) {
  return (
    <S.SearchBar>
      <S.SearchOutlinedIcon />
      <S.SearchBarInput placeholder="검색어를 입력해 주세요" onChange={props.onChangeSearch} />
    </S.SearchBar>
  );
}
