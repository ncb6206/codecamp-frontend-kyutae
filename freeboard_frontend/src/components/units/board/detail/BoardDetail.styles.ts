import styled from "@emotion/styled";

export const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  width: 60rem;
  margin: 100px 100px 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 2rem;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 1rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Writer = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const CreatedAt = styled.div`
  line-height: 24px;
  color: #828282;
`;

export const Body = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  padding: 2rem 0;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 3rem;
`;

export const Button = styled.button`
  margin: 0 1rem;
  padding: 1rem 3rem;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  cursor: pointer;
  :hover {
    background-color: gold;
    border-color: white;
  }
`;
