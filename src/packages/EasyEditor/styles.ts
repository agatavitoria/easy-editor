import styled from "styled-components";

export const EasyEditorInput = styled.textarea`
  resize: none;
  width: 690px;
  height: 250px;
  padding: 16px 20px;

  border-radius: 10px;
  border: 1px solid #767676;
  font-family: "Inter", sans-serif;

  &:focus {
    outline: none;
    border-color: #5f5f5f;
    background-color: #fafafa;
  }
`;
