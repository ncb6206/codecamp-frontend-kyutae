import { getMyDate } from "../../../../commons/libraries/util";
import SearchBars01 from "../../../../commons/searchbars/01/Searchbars01.container";
import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import * as S from "./BoardLists.styles";
import type { IBoardListUIProps } from "./BoardLists.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <SearchBars01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      />
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>
      {props.data?.fetchBoards?.map((el, index) => (
        <S.Row key={el._id}>
          <S.ColumnBasic>{String(el._id).slice(-4).toUpperCase()}</S.ColumnBasic>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToPage(`/boards/${el._id}`)}>
            {el.title
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <S.ColumnTitleSpan key={uuidv4()} isMatch={props.keyword === el}>
                  {el}
                </S.ColumnTitleSpan>
              ))}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getMyDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations01 count={props.count} refetch={props.refetch} />
        <S.Button onClick={props.onClickMoveToPage("/boards/new")}>
          <S.PencilIcon src="images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
