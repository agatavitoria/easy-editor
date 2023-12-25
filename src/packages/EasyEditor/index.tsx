import {
  Actions,
  ButtonAction,
  Container,
  ContainerInput,
  EasyEditorInput,
  Layout,
} from "./styles";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "../../icons";
import type { EasyEditorProps } from "./types";
import useEditor from "../../hook/useEditor";

function EasyEditor({ placeholder, initialValue, readOnly }: EasyEditorProps) {
  const { editorContent, editorRef, applyFormat } = useEditor(initialValue);

  return (
    <Layout>
      <Container>
        <Actions>
          <ButtonAction onClick={() => applyFormat("b")}>
            <BoldIcon />
          </ButtonAction>
          <ButtonAction onClick={() => applyFormat("i")}>
            <ItalicIcon />
          </ButtonAction>
          <ButtonAction onClick={() => applyFormat("u")}>
            <UnderlineIcon />
          </ButtonAction>
        </Actions>
        <ContainerInput>
          <EasyEditorInput
            ref={editorRef}
            dangerouslySetInnerHTML={{ __html: editorContent }}
            contentEditable={!readOnly}
          />
        </ContainerInput>
      </Container>
    </Layout>
  );
}

export default EasyEditor;
