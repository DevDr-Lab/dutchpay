import { Button, Container, Form, Row } from "react-bootstrap";
import styled from 'styled-components';
import { OverlayWrapper } from "./shared/OverlayWrapper";

export const CenteredOverlayForm = ({ children, title, validated, handleSubmit }) => {
  return (
    <CentrallizedContainer>
      <StyledH1>DutchPay</StyledH1>

      <OverlayWrapper>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <StyledRow>
              <Row className="align-items-start">
                <StyledH2>{ title }</StyledH2>
              </Row> 
              <Row className="align-items-center">
                { children }    
              </Row>
              <Row className="align-items-end">
                <StyledSubmitButton>저장</StyledSubmitButton>
              </Row>
            </StyledRow>
          </Form>
        </Container>
      </OverlayWrapper>
    </CentrallizedContainer>
  )
};

const StyledH1 = styled.h1`
  font-weight: 200;
  letter-spacing: 10px;
  color: darkgray;

`

const CentrallizedContainer = styled(Container)`
  width: 50vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

const StyledH2 = styled.h2`
  font-weight: 700;
  line-height: 35px;
  text-align: right;
  overflow-wrap: break-word;
  word-break: keep-all;
`

const StyledRow = styled(Row)`
  align-items: center;
  justify-content: center;
  height: 60vh;
  }
`

const StyledSubmitButton = styled(Button).attrs({
  type: 'submit'
})`
  background-color: #6610F2;
  border-radius: 8px;
  border: none;
  
  &:hover {
    background-color: #6610F2;
    filter: brightness(80%);
  }
`
