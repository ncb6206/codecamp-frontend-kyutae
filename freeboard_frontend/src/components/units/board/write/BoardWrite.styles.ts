import styled from "@emotion/styled";
import Modal from "antd/lib/modal/Modal";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { ISubmitButtonProps } from "./BoardWrite.types";

export const Wrapper = styled.form`
  width: 1200px;
  margin: 100px;
  padding: 80px 102px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  padding: 14px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  resize: none;
`;

export const ZipCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
  background: #000000;
  color: #ffffff;
  width: 124px;
  height: 52px;
  cursor: pointer;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const OptionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  background: ${(props: ISubmitButtonProps) => (props.isActive ? "#ffd600" : "#f2f2f2")};
  border: none;
  padding: 14px 60px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: red;
`;

export const AddressModal = styled(Modal)``;

export const ZipcodeInput = styled(DaumPostcodeEmbed)``;
