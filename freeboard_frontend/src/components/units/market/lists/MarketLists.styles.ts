import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
`;

export const ListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #bdbdbd;
  padding: 1rem 0;
`;

export const ListImageWrapper = styled.div`
  width: 15%;
`;

export const ListImage = styled.img`
  width: 10rem;
  height: 10rem;
  margin-right: 2rem;
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  cursor: pointer;
`;

export const ListName = styled.div``;

export const ListContents = styled.div``;

export const ListRemarks = styled.div``;

export const ListPickedCount = styled.div``;

export const ListPrice = styled.div`
  text-align: center;
  width: 15%;
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
