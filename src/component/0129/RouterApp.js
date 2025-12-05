import {Link, Outlet} from "react-router-dom";

export default function RouterApp() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">top</Link>
        </li>
        <li>
          <Link to="/article">article</Link>
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
