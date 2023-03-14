import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.5rem;
`;

export const SearchOutlinedIcon = styled(SearchOutlined)`
  color: #808080;
  font-size: 30px;
  cursor: pointer;

  :hover {
    color: #5729ff;
  }
  margin-right: 1rem;
`;

export const SearchBarInput = styled.input`
  width: 40rem;
  background: #f2f2f2;
  border: none;
  border-radius: 5px;
  padding: 0.8rem;
`;
