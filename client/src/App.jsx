import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { darkTheme, lighTheme } from './utils/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Error from './pages/Error';
import Signin from './pages/Signin';
import { Toaster } from 'react-hot-toast';
import Search from './pages/Search';
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.softColor};
  color: ${({ theme }) => theme.text};
  height: 100%;
`;
const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;
function App() {
  const [darkMode, setdarkMode] = useState(true);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lighTheme}>
        <Container>
          <Toaster />
          <BrowserRouter>
            <Menu darkMode={darkMode} setdarkMode={setdarkMode} />
            <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/" element={<Home type="random" />} />
                  <Route path="/trends" element={<Home type="trend" />} />
                  <Route path="/subscriptions" element={<Home type="sub" />} />
                  <Route path="search" element={<Search />} />
                  <Route path="/video/:id" element={<Video />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </Wrapper>
            </Main>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
