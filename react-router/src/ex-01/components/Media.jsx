import { NavLink, Outlet } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <h1>Media</h1>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? 'lightcoral' : 'initial',
            })}
            to="/media/video"
          >
            video
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              backgroundColor: isActive ? 'lightblue' : 'initial',
            })}
            to="/media/music"
          >
            music
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
