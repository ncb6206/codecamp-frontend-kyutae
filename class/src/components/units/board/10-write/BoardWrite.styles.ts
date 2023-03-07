import styled from "@emotion/styled";
import { IBlueButtonProps } from "./BoardWrite.types";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: ${(props: IBlueButtonProps) => props.rrr};
  background-color: ${(props: IBlueButtonProps) => (props.zzz ? "yellow" : "default")};
`;
