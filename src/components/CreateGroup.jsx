import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useRecoilState, useSetRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import {
  CenteredOverlayForm,
  StyledH2,
  StyledRow,
  StyledSubmitButton,
} from "./CenteredOverlayForm";

export const CreateGroup = () => {
  const [validated, setValidated] = useState(false);
  const [validGroupName, setValidGroupName] = useState(false);
  const setGroupName = useSetRecoilState(groupNameState);
  /*state에 데이터를 저장해야 expense에서도 이용 가능 */

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValidGroupName(true);
    } else {
      event.stopPropagation();
      setValidGroupName(false);
    }
    setValidated(true);
  };
  return (
    <CenteredOverlayForm
      title="먼저, 더치페이 할 그룹의 이름을 정해볼까요?"
      validated={validated}
      handleSubmit={handleSubmit}
    >
      <Form.Group controlId="vallidationGroupName">
        <Form.Control
          type="text"
          required
          placeholder="2022 제주도 여행"
          onChange={(e) => setGroupName(e.target.value)}
        />
        <Form.Control.Feedback type="invalid" data-valid={validGroupName}>
          그룹 이름을 입력해 주세요
        </Form.Control.Feedback>
      </Form.Group>
    </CenteredOverlayForm>
  );
};
