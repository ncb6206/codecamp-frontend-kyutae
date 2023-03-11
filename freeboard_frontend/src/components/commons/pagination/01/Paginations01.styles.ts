import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { IPageProps } from "../../../units/board/lists/BoardLists.types";

export const LeftIcon = styled(LeftOutlined)``;

export const RightIcon = styled(RightOutlined)``;

export const BoardList = styled.span`
  margin: 0 1rem;
  color: ${(props: IPageProps) => (props.isActive ? "#5729ff" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
