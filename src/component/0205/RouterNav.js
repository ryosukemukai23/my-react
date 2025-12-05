// RouterNav.js
import {Link, Outlet} from "react-router-dom";

export default function RouterNav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">top</Link>
        </li>
        <li>
          <Link to="/article">article</Link>
          <ul>
            <li>
              <Link to="/article/info">info</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
