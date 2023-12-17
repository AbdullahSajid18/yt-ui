import styled, { ThemeProvider } from 'styled-components'
import './App.css';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import Signin from './pages/Signin';


const Container = styled.div`
 display: flex
`
const Main = styled.div`
flex :7;
background-color: ${({theme}) => theme.bg};
color: ${({theme}) => theme.text};
`
const Wrapper = styled.div`
 padding: 22px 96px;
 
`


function App() {
  const [darkMode , setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container >
      <BrowserRouter>
      
      
     <Menu darkMode={darkMode} setDarkMode ={setDarkMode} />
     <Main>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage type='random' />} />
            <Route path='trends' element={<HomePage type='trending' />} />
            <Route path='subscriptions' element={<HomePage type="sub" />} />
            <Route path='signin' element={<Signin />} />
            <Route path='video'>
              <Route path=':id' element={<VideoPage />} />
            </Route>
          </Route>
        </Routes>
      </Wrapper>
     </Main>
     </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
