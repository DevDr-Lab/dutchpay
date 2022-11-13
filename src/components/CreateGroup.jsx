import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { CenteredOverlayForm } from "./CenteredOverlayForm";

export const CreateGroup = () => {
  const [validated, setValidated] = useState(false);
  const [groupName, setGroupName] = useRecoilState(groupNameState);
  /*state에 데이터를 저장해야 expense에서도 이용 가능 */

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity()) {    
    } else {
      event.stopPropagation();
    }
    setValidated(true)
  };
  return (
    <div>
      <h1>DutchPay</h1>

      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <h2>먼저, 더치페이 할 그룹의 이름을 정해볼까요?</h2>
          </Row>
          <Row>
            <Form.Group controlId="vallidationGroupName">
              <Form.Control
                type="text"
                required
                placeholder="2022 제주도 여행"
                onChange={(e) => setGroupName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                그룹 이름을 입력해주세요
              </Form.Control.Feedback>
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
