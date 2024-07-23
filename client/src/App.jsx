import { lazy } from "react";
import { lightTheme } from "./utils/Themes";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: column;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
`;

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
