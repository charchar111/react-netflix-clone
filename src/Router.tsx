import { createBrowserRouter } from "react-router-dom";
import { darkTheme } from "./theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Root from "./Routes/Root";
import Home from "./Routes/Home";
import Genre from "./Routes/Genre";
import Search from "./Routes/Search";
import ErrorPage from "./Routes/ErrorPage";
import ModalPage from "./Components/ModalPage";

const GlobalStyle = createGlobalStyle`
  ${reset}
html {
  font-size: min(1.7vw,62.5%)  ;
  /* font-size:1.5vw  ; */
  /* font-size: clamp(50%,1.5vw,62.5%) ; */
}
  body {

background-color: ${(props) => props.theme.bgColors.background};
    /* background-color: ${(props) => props.theme.bgColors.background}; */
    color: ${(props) => props.theme.textColors.background};

font-size: 1.6rem;
  }

  a,button {
    all: unset;
    cursor: pointer;
  }

  #root {
height: 300vh;
    /* 임시 */
  }
`;

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: (
      <>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <Root />
        </ThemeProvider>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/browse",
        element: <Home />,
        children: [
          { path: "/browse/modal/:id", element: <ModalPage /> },
          { path: "genre/:id", element: <Genre /> },
          { path: "my-list", element: null },
          { path: "genre/original-audio", element: null },
        ],
      },
      {
        path: "/latest",
        element: <Search />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
