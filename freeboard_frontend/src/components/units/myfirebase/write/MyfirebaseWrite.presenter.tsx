import { InputKhan, InputWrapper, Wrapper } from "./MyfirebaseWrite.styles";
import { IMyfirebaseWriteUIProps } from "./MyfirebaseWrite.types";

export default function MyfirebaseWriteUI(props: IMyfirebaseWriteUIProps) {
  return (
    <Wrapper>
      <InputWrapper>
        작성자 : <InputKhan placeholder="작성자를 입력해주세요" onChange={props.onChangeWriter} />
      </InputWrapper>
      <InputWrapper>
        제목 : <InputKhan placeholder="제목을 입력해주세요" onChange={props.onChangeTitle} />
      </InputWrapper>
      <InputWrapper>
        내용 : <InputKhan placeholder="내용을 입력해주세요" onChange={props.onChangeContents} />
      </InputWrapper>
      <button onClick={props.onClickBoard}>파이어베이스로 전송</button>
    </Wrapper>
  );
}
