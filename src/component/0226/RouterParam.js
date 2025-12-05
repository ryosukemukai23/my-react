import {Suspense} from "react";
import {Link, Outlet} from "react-router-dom";

export default function RouterParam() {
  return (
    <>
      <nav style={{padding: "1rem", borderBottom: "1px solid #ccc"}}>
        <ul style={{display: "flex", gap: "1rem", listStyle: "none"}}>
          <li>
            <Link to="/">トップ</Link>
          </li>
          <li>
            <Link to="/weather/Tokyo">天気(Tokyo)</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div style={{padding: "1rem"}}>ロード中...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
