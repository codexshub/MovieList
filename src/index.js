import { createRoot } from "react-dom/client";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import Routing from "../src/component/multiRouting/Routing";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <BrowserRouter>
  //   <Routing />
  // </BrowserRouter>
  <App></App>
);