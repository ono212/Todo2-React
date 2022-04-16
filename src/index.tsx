import React from "react";
import ReactDOM from "react-dom"; // /client';
import "./index.css";
import App from "./App";

/* 기존에 이렇게 작성되어져 있었는데 강의와 달라서 주석처리.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
*/

// App.tsx 파일에 설정된 html element를 id가 root인 element에 렌더링하라고 지시하는 코드
ReactDOM.render(<App />, document.getElementById("root"));
