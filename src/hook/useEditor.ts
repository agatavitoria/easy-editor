import { useState, useRef, useEffect } from "react";
import { FormatTypes } from "./types";

const useEditor = (initialValue: string = "") => {
  // State to manage the content of the editor
  const [editorContent, setEditorContent] = useState<string>(
    initialValue || ""
  );
  // Ref to store the reference to the editor's DOM element
  const editorRef = useRef<HTMLDivElement>(null);

  // Function to get the current text selection
  const getSelection = () => window.getSelection();
  // Function to get the current range of the text selection
  const getRange = () => getSelection()?.getRangeAt(0);

  const isFormatActive = (tag: FormatTypes): boolean => {
    console.log(tag);
    const range = getRange();
    const parentElement = range?.commonAncestorContainer.parentElement;
    return parentElement?.tagName === tag.toUpperCase() || false;
  };

  // Function to apply or remove a specific format (e.g., bold) to/from the selection
  function applyFormat(tag: FormatTypes) {
    const editor = editorRef.current;

    if (!editor) return;

    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);

    if (range) {
      const parentElement = range.commonAncestorContainer.parentElement;

      // Create a new element with the specified tag (e.g., span)
      const newElement = document.createElement(tag);
      // Clone the contents of the selection and append them to the new element
      const content = range.cloneContents();
      newElement.appendChild(content);

      // Remove the current content of the selection
      range.deleteContents();

      if (isFormatActive(tag)) {
        // Replace the parent element with the new formatted element
        parentElement?.replaceWith(newElement);
      } else {
        // Insert the new formatted element into the range
        range.insertNode(newElement);
      }
    }

    // Update the state with the new content of the editor
    setEditorContent(editor.innerHTML);
  }

  // Function to reset the selection to the end of the editor
  const resetSelection = () => {
    const editor = editorRef.current;
    if (editor) {
      const selection = getSelection();
      const range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);
      // Remove the current selection and set a new one at the end of the editor
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  useEffect(() => {
    resetSelection();
  }, [editorContent]);

  return { editorContent, editorRef, isFormatActive, applyFormat };
};

export default useEditor;
