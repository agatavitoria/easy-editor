import { ChangeEvent, useState } from "react";
import { EasyEditorInput } from "./styles";

type Props = {
  placeholder?: string;
  initialValue?: string;
  readOnly?: boolean;
};

function EasyEditor({ placeholder, initialValue, readOnly }: Props) {
  const [inputValue, setInputValue] = useState<string>(initialValue || "");

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(event.target.value);
  }

  return (
    <EasyEditorInput
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      readOnly={readOnly}
    />
  );
}

export default EasyEditor;
