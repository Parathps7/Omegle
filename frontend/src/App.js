import Home from './pages/Home';
import './App.css';
import Header from './Layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
import Video from './pages/Video';
import Socket from './Socket';

function App() {
  return (
    <>
      <Socket />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
