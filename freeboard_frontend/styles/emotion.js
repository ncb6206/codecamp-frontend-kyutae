import styled from "@emotion/styled";

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Box = styled.div`
  width: 1200px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 50px;
`;

export const Header = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
`;

export const SetForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Writer = styled.span`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 1rem;
`;

export const WriterInput = styled.input`
  background: #ffffff;
  border: 1px solid #bdbdbd;
  width: 30rem;
  height: 3.2rem;
`;

export const PasswordInput = styled.input`
  background: #ffffff;
  border: 1px solid #bdbdbd;
  width: 30rem;
  height: 3.2rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div``;

export const Address = styled.div``;

export const Youtube = styled.div``;

export const Picture = styled.div``;

export const Main = styled.div``;
