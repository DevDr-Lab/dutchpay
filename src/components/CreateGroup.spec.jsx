/* TEST case를 만들기 위함 */
/* 그룹의 이름을 받아서 저장하는 기능 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import { CreateGroup } from "./CreateGroup";


const renderComponent = () => {
  render(
    <RecoilRoot>
      <CreateGroup />
    </RecoilRoot>
  ); // 어떤 리액트 컴포넌트를 렌더링하고 싶은지 적어준다

  // 계속 반복되는 것을 컴포넌트화
  const input = screen.getByPlaceholderText("2022 제주도 여행"); // screen은 렌더링된 화면이라고 생각하면 된다
  const saveButton = screen.getByText("저장");
  const errorMessage = screen.queryByText("그룹 이름을 입력해 주세요"); // 클릭하면 에러메세지가 출력되어 query

  return {
    input,
    saveButton,
    errorMessage,
  };
};

// 실패하는 테스트 생성
describe("그룹생성 페이지", () => {
  test("그룹이름 입력 컴포넌트가 랜더링 되는가", () => {
    const { input, saveButton } = renderComponent();

    // TODO: input component rendering
    expect(input).not.toBeNull(); // input이 Null이 아닐때 테스트 통과

    // TODO: save button rendering
    expect(saveButton).not.toBeNull();
  });
  test("그룹이름을 입력하지 않고 저장 버튼을 클릭시 에러 메세지 노출", async () => {
    // 비동기로
    const { saveButton, errorMessage } = renderComponent();
    
    await userEvent.click(saveButton); // 버튼을 눌렀을때처럼 이벤트발생
    expect(errorMessage).toHaveAttribute('data-valid', 'false');
  });
  test("그룹이름 입력 후 저장버튼 클릭시 저장 성공", async () => {
    // type, click은 비동기

    const { input, saveButton, errorMessage } = renderComponent();
    await userEvent.type(input, "그룹명 예시");
    await userEvent.click(saveButton);

    expect(errorMessage).toHaveAttribute('data-valid', 'true');
  });
});
