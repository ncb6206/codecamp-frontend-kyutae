import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 0.8rem 1rem;
  border: 1px solid black;
  background-color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
