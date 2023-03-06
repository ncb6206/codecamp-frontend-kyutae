import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 60rem;
  margin: 0 6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5rem 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const MainWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export const WriterWrapper = styled.div`
  text-align: left;
`;

export const Writer = styled.div`
  padding-bottom: 0.3rem;
`;

export const Contents = styled.div`
  color: #4f4f4f;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 1.5rem;
`;

export const UpdateIcon = styled.img`
  margin-right: 0.7rem;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  cursor: pointer;
`;

export const DateString = styled.div`
  color: #bdbdbd;
  padding: 1rem 0 0 4.2rem;
`;
