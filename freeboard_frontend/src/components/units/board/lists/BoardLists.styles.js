import styled from "@emotion/styled";

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100px;
`;

export const TableTop = styled.div`
  border: 2px solid black;
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.9rem 0;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const TableBottom = styled.div`
  border: 2px solid black;
`;

export const PencilIcon = styled.img`
  padding: 0.5rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-between;
  padding-top: 3rem;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
