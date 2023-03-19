import { Fragment } from "react";
import * as S from "./LayoutNavigation.styles";
import { LayoutNavigationUIProps } from "./LayoutNavigation.types";

const SelectMenu = [
  { name: "나의파이어베이스", page: "/myfirebase" },
  { name: "라이브강아지", page: "/openapis" },
  { name: "자유게시판", page: "/boards" },
  { name: "중고마켓", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigationUI(props: LayoutNavigationUIProps) {
  return (
    <S.Wrapper>
      {SelectMenu.map((el) => (
        <Fragment key={el.page}>
          <S.MenuItem id={el.page} onClick={props.onClickMoveToPage(el.page)}>
            {el.name}
          </S.MenuItem>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
