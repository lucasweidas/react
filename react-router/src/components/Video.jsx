import { Link, useParams, Outlet } from 'react-router-dom';

export default function Video() {
  return (
    <div>
      <h2>Video</h2>
      <Link to="/media/video/react">react</Link>
      <Outlet />
    </div>
  );
}

export function VideoId() {
  const { videoid } = useParams();
  return (
    <div>
      <h3>Video URL is: {videoid}</h3>
    </div>
  );
}
