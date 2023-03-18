import styled from "@emotion/styled";
import { Button } from "antd";

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 40rem;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 8rem 5rem;
  margin: 2rem;
`;

export const LoginTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const EmailInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PasswordInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputLabel = styled.label`
  font-size: 20px;
  margin-bottom: 1rem;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const LoginButton = styled(Button)`
  margin-top: 3rem;
  width: 30%;
  height: 4rem;
  font-size: 25px;
  border-radius: 8px;
`;

export const ErrorMessage = styled.div`
  color: red;
`;
