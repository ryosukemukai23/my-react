import {Link, Outlet} from "react-router-dom";

export default function RouterParam() {
  return (
    <div style={{padding: "20px"}}>
      <h1>ユーザー管理</h1>
      <nav>
        <Link to="/">ホーム</Link>
      </nav>

      <Outlet />
    </div>
  );
}
