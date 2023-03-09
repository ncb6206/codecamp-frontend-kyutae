import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 60rem;
  margin: 0 6rem;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #bdbdbd;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  padding-bottom: 2rem;
`;

export const PencilIcon = styled.img`
  padding-right: 1rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #bdbdbd;
  padding-left: 1rem;
  height: 3rem;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid #bdbdbd;
  margin: 1rem 0;
`;

export const Contents = styled.textarea`
  width: 60rem;
  height: 7rem;
  padding: 0.7rem;
  border: none;
  resize: none;
`;

export const BottomWrapper = styled.div`
  border-top: 1px solid #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentsLength = styled.div`
  padding-left: 1rem;
  color: #bdbdbd;
`;

export const Button = styled.button`
  padding: 1rem;
  background: #000000;
  color: #ffffff;
  cursor: pointer;
`;

export const RateIcon = styled(Rate)``;
