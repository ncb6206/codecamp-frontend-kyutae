import {
  Wrapper,
  Box,
  Header,
  User,
  Title,
  Content,
  Address,
  Youtube,
  Picture,
  Main,
  SetForm,
  Writer,
  WriterInput,
  PasswordInput,
} from "../../../styles/emotion";

export default function BoardPage() {
  // 여기는 자바스크립트 쓰는곳

  return (
    <Wrapper>
      <Box>
        <Header>게시물 등록</Header>
        <User>
          <SetForm>
            <Writer>작성자</Writer>
            <WriterInput placeholder="이름을 적어주세요"></WriterInput>
          </SetForm>
          <SetForm>
            <Writer>비밀번호</Writer>
            <PasswordInput placeholder="비밀번호를 입력해주세요"></PasswordInput>
          </SetForm>
        </User>
        <Title>
          <SetForm></SetForm>
        </Title>
        <Content></Content>
        <Address></Address>
        <Youtube></Youtube>
        <Picture></Picture>
        <Main></Main>
      </Box>
    </Wrapper>
  );
}
