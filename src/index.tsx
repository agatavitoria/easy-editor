import React from "react";
import ReactDOM from "react-dom/client";
import { EasyEditor } from "./packages";
import { GlobalStyle } from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <EasyEditor />
  </React.StrictMode>
);
