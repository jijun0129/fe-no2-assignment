import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    margin: 0;
    padding: 0;
}

body {
    background-color: #ffe4b8;
    margin: 0;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    min-width: 320px;
    min-height: 100vh;
}
`;

export default GlobalStyle;
