import {Link, Outlet} from "react-router-dom";

function UserListApp() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
        </ul>
      </nav>
      <hr></hr>
      <Outlet />
    </>
  );
}

export default UserListApp;
