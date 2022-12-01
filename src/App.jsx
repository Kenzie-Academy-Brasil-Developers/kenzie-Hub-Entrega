import GlobalStyle from "./styles/global";

import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Registration />
    </>
  );
};
