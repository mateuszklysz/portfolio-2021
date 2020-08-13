import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        margin: 0;
        padding: 0;
    }
    body{
        box-sizing:border-box;
        font-family:${({
          theme: {
            font: { family },
          },
        }) => family.openSans}
    }
`;

export default GlobalStyle;
