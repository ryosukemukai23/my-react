// import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
// import ArticlePage from "./ArticlePage";
// import InvalidParamsPage from "./InvalidParamsPage";
// import RouterParam from "./RouterParam";
// import TopPage from "./TopPage";

// const routesParam = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<RouterParam />}>
//       <Route index element={<TopPage />} />
//       <Route path="article/:id?" element={<ArticlePage />} errorElement={<InvalidParamsPage />} />
//     </Route>
//   )
// );

// export default routesParam;

// import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
// import RouterParam from "./RouterParam";
// import TopPage from "./TopPage";
// import WeatherPage from "./WeatherPage";

// const routesParam = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<RouterParam />}>
//       <Route index element={<TopPage />} />

//       {/* ✅ スラッシュ削除 + loader return */}
//       <Route
//         path="weather/:city"
//         element={<WeatherPage />}
//         loader={({params}) =>
//           fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=7cb9a59058af4dfec4366f48174f3dea&units=metric&lang=ja`
//           )
//         }
//       />
//     </Route>
//   )
// );

// export default routesParam;
// import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";

// import RouterParam from "./RouterParam";
// import TopPage from "./TopPage";
// import WeatherPage from "./WeatherPage";

// const fetchWeather = async ({params}) => {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=7cb9a59058af4dec4366f48174f3dea&units=metric&lang=ja`
//   );

//   if (res.ok) {
//     return res; // ✅ APIが成功したらそのまま返す
//   }

//   // ❌ APIエラー時 → ダミーデータを返す
//   return new Response(
//     JSON.stringify({
//       weather: [{id: 803, main: "unknown", description: "不明", icon: "50d"}],
//       name: "不明",
//     }),
//     {
//       status: 404,
//       headers: {"Content-Type": "application/json"},
//     }
//   );
// };

// const routesParam = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<RouterParam />}>
//       <Route index element={<TopPage />} />
//       <Route path="weather/:city" element={<WeatherPage />} loader={fetchWeather} />
//     </Route>
//   )
// );

// export default routesParam;

// import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
// import CommonErrorPage from "./CommonErrorPage";
// import RouterParam from "./RouterParam";
// import TopPage from "./TopPage";
// import WeatherPage from "./WeatherPage";

// const fetchWeather = async ({params}) => {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=7cb9a59058af4dfec4366f48174f3dea&units=metric&lang=ja`
//   );

//   if (res.ok) return res;

//   switch (res.status) {
//     case 404:
//       throw new Response(JSON.stringify({message: "都市名を正しく入力してください"}), {
//         status: 404,
//         headers: {"Content-Type": "application/json"},
//       });
//     case 401:
//       throw new Response(JSON.stringify({message: "APIキーが不正です"}), {
//         status: 401,
//         headers: {"Content-Type": "application/json"},
//       });
//     default:
//       throw new Response(JSON.stringify({message: "APIエラーが発生しました"}), {
//         status: 501,
//         headers: {"Content-Type": "application/json"},
//       });
//   }
// };

// const routesParam = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<RouterParam />} errorElement={<CommonErrorPage />}>
//       <Route index element={<TopPage />} />
//       <Route path="weather/:city" element={<WeatherPage />} loader={fetchWeather} />
//     </Route>
//   )
// );

// export default routesParam;

import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import RouterParam from "./RouterParam";
import TopPage from "./TopPage";

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route index element={<TopPage />} />
      <Route path="weather/:city" lazy={() => import("./WeatherLazyPage")} />
    </Route>
  )
);
