import { getMyDate } from "../../../../commons/libraries/util";
import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import * as S from "./BoardLists.styles";
import type { IBoardListUIProps } from "./BoardLists.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
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
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnBasic>{el.writer}</S.ColumnBasic>
          <S.ColumnBasic>{getMyDate(el.createdAt)}</S.ColumnBasic>
        </S.Row>
      ))}
      <S.TableBottom />
      <S.Footer>
        <Paginations01 count={props.count} refetch={props.refetch} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
