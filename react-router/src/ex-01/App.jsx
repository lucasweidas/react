import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Media from './components/Media';
import Video, { VideoId } from './components/Video';
import Music, { Edm, Pop } from './components/Music';

export default function App() {
  return (
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
  );
}
