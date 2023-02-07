import { useEffect, useRef, useState } from 'react';

export default function Example() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  return (
    <div>
      <input type="text" value={text} onChange={({ target }) => setText(target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
      <br />
      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlaying} />
    </div>
  );
}

function VideoPlayer({ src, isPlaying }) {
  const video = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('play');
      video.current.play();
    } else {
      console.log('pause');
      video.current.pause();
    }
  }, [isPlaying]);

  return <video src={src} ref={video} loop playsInline />;
}
