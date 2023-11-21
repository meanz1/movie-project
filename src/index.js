import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import GlobalFont from "./styles/fonts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalFont />
    <GlobalStyle />
    <App />
  </>
);
