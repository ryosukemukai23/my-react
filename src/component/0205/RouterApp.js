import {Outlet, Link} from "react-router-dom";

export default function RouterParam() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">トップ</Link> |<Link to="/article/1">記事1</Link> |<Link to="/article/2">記事2</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
