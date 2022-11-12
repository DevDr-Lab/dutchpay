import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { CenteredOverlayForm } from "./CenteredOverlayForm";

export const CreateGroup = () => {
  const [validated, setValidated] = useState(false);
  const [groupName, setGroupName] = useRecoilState(groupNameState);
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity()) {
        setValidated(true)
    } else {
      event.stopPropagation();
    }
  };
  return (
    <div>
      <h1>DutchPay</h1>
      <Container>
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <h2>먼저, 더치페이 할 그룹의 이름을 정해볼까요?</h2>
          </Row>
          <Row>
            <Form.Group controlId="vallidationGroupName">
              <Form.control
                type="text"
                required
                placeholder="2022 제주도 여행"
              />
              <Form.control.Feedback type="invalid">
                그룹 이름을 입력해주세요
              </Form.control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit">저장</Button>
          </Row>
        </Form>
      </Container>
      {/*<CenteredOverlayForm />*/}
    </div>
  );
};
