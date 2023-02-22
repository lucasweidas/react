import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Media from './components/Media';
import Video, { VideoId } from './components/Video';
import Music, { Edm, Pop } from './components/Music';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Navigate replace to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />}>
          <Route path="video" element={<Video />}>
            <Route path=":videoid" element={<VideoId />} />
          </Route>
          <Route path="music" element={<Music />} />
        </Route>
        <Route path="pop" element={<Pop />} />
        <Route path="edm" element={<Edm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
