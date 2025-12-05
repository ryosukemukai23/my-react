// import {NavLink, Outlet} from "react-router-dom";
// import "./RouterNav.css";

// function RouterParam() {
//   return (
//     <>
//       <ul>
//         <li>
//           <NavLink to="/">top</NavLink>
//         </li>
//         <li>
//           <NavLink to="/article/0">article1</NavLink>
//         </li>
//         <li>
//           <NavLink to="/article/1">article2</NavLink>
//         </li>
//         <li>
//           <NavLink to="/articleQuery?id=3">article3（クエリ経由）</NavLink>
//         </li>
//         <li>
//           <NavLink to="/articleState" state="4">
//             article4（State経由）
//           </NavLink>
//         </li>
//       </ul>
//       <hr />
//       <Outlet />
//     </>
//   );
// }

// export default RouterParam;

// import {Link, Outlet} from "react-router-dom";

// export default function RouterParam() {
//   return (
//     <>
//       <div>
//         <ul>
//           <li>
//             <Link top="/">トップ</Link>
//           </li>
//         </ul>
//       </div>
//       <Outlet />
//     </>
//   );
// }

// import {Link, Outlet} from "react-router-dom";

// export default function RouterParam() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             {/* ✅ topではなく to */}
//             <Link to="/">トップ</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </>
//   );
// }

// import {Link, Outlet} from "react-router-dom";

// export default function RouterParam() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             {/* ✅ topではなく to */}
//             <Link to="/">トップ</Link>
//           </li>
//           <li>
//             <Link to="/weather/London">Tokyoの天気</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet />
//     </>
//   );
// }
import {Link, Outlet, useNavigation} from "react-router-dom";

export default function RouterParam() {
  const navigation = useNavigation(); // ←これが抜けてた！

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">トップ</Link>
          </li>
          <li>
            {/* 👇 LondonじゃなくTokyoを表示したいなら city名もTokyoに */}
            <Link to="/weather/Tokyo">Tokyoの天気</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {navigation.state === "loading" && <div>loading...</div>}

      <Outlet />
    </>
  );
}
