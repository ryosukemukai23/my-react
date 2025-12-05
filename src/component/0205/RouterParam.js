import {NavLink, Outlet} from "react-router-dom";
export default function RouterParam() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">top</NavLink>
        </li>
        <li>
          <NavLink to="/article/0">article1</NavLink>
        </li>
        <li>
          <NavLink to="/article/1">article2</NavLink>
        </li>
        <li>
          <NavLink to="/article/2">article3</NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
staginx