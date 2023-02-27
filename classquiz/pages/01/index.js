import {
  Wrapper,
  RegisterBox,
  Profile,
  Headers,
  Body,
  Footer,
  HeaderElement,
  ProfileElement,
  Search,
  User,
} from "../../styles/emotion";

export default function QnaPage() {
  return (
    <Wrapper>
      <RegisterBox>
        <Profile>
          <Search>검색</Search>
          <User>
            <ProfileElement>마이</ProfileElement>
            <ProfileElement>임정아</ProfileElement>
          </User>
        </Profile>
        <Headers>
          <HeaderElement>공지사항</HeaderElement>
          <HeaderElement>이벤트</HeaderElement>
          <HeaderElement>FAQ</HeaderElement>
          <HeaderElement>Q&A</HeaderElement>
        </Headers>
        <Body></Body>
        <Footer></Footer>
      </RegisterBox>
    </Wrapper>
  );
}
