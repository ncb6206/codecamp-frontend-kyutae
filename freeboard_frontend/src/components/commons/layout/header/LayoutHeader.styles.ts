import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 7rem;
  background-color: #f5f2fc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
`;

export const InnerLogo = styled.div`
  font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
  cursor: pointer;
`;

export const InnerButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  gap: 1rem;
`;

export const InnerButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: #5729ff;
`;
