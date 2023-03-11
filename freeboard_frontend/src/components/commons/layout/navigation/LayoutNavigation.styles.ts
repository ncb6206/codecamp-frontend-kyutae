import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 3rem;
  background: #ffd600;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #ab9000;
`;

export const MenuItem = styled.div`
  margin: 0 2rem;
  user-select: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #514400;
  }
`;
