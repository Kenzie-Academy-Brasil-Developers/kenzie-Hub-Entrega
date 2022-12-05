import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  max-width: 1400px;
}

:root {
  /* Primary Palette */
  --Color-primary: #FF577F;
  --Color-primary-Focus: #FF427F;
  --Color-primary-Negative: #59323F;

  /* Grey Scale Palette */
  --Grey-0: #F8F9FA;
  --Grey-1:#868E96 ;
  --Grey-2: #343B41;
  --Grey-3:#212529 ;
  --Grey-4: #121214;

  /* Feedback Palette */
  --Sucess:#3FE864 ;
  --Negative:#E83F5B ;

    /* Font */
    --Inter: 'Inter', sans-serif ;

    margin: 0 auto;
    background-color: var(--Grey-4);
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a{
  text-decoration:none;
}
`;
