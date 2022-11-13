import { InputTags } from "react-bootstrap-tagsinput";
import { useRecoilState, useRecoilValue } from "recoil";
import { groupMembersState } from "../state/goupMembers";
import {
  CenteredOverlayForm,
  StyledH2,
  StyledRow,
  StyledSubmitButton,
} from "./CenteredOverlayForm";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { groupNameState } from "../state/groupName";
import styled from "styled-components";

export const AddMembers = () => {
  const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState);
  const groupName = useRecoilValue(groupNameState);
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    setValidated(true)
  };
  const header = `${groupName} 그룹에 속한 사람들의 이름을 모두 적어주세요`;
  return (
    <CenteredOverlayForm 
      title={header}
      validated={validated}
      onSubmit={handleSubmit}
    >
      <InputTags
        data-testid="input-member-names"
        placeholder="이름을 띄어쓰기 해주세요"
        onTags={(value) => setGroupMembers(value.values)}
      />

      {validated && groupMembers.length === 0 && (
        <StyledErrorMessage>그룹 멤버의 입력을 입력해 주세요</StyledErrorMessage>
      )}
    </CenteredOverlayForm>
  );
};

const StyledErrorMessage = styled.span`
  color: red;
`