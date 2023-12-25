import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #767676;
  width: 690px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px;
  gap: 1.3125rem;
  border-bottom: 1px solid #767676;
`;

export const ButtonAction = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ContainerInput = styled.div`
  padding: 20px;
`;

export const EasyEditorInput = styled.div`
  resize: none;
  border: none;
  height: 250px;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;
