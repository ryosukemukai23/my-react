import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import routesParam from "./component/0305/routesParam"; // ← routes.js 読み込み

import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={routesParam} />
  </React.StrictMode>
);

reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom";
// import routesScroll from "./component/0226/routesScroll"; // ← routes.js 読み込み

// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={routesScroll} />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom";
// import routes from "./component/0226/routes";

// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={routes} />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom";
// import routes from "./component/0219/routes"; // ← routes.js 読み込み

// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={routes} />
//   </React.StrictMode>
// );

// reportWebVitals();

// // src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom";
// import routesParam from "./component/0212/routesParam";

// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={routesParam} />
//   </React.StrictMode>
// );

// reportWebVitals();

// // src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

// import UserDetailPage from "./component/0212/UserDetailPage";
// import UserListApp from "./component/0212/UserListApp";
// import UserListPage from "./component/0212/UserListPage";

// import "./index.css";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<UserListApp />}>
//       <Route index element={<UserListPage />} />
//       <Route path="users/:id" element={<UserDetailPage />} />
//     </Route>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// // src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom";
// import routesParam from "./component/0205/RoutesParam";

// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={routesParam} />
//   </React.StrictMode>
// );

// reportWebVitals();

// // src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom";
// import routesLink from "./component/0205/routeLink";

// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={routesLink} />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import CountdownTimer from "./component/0205/CountdownTimer";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <CountdownTimer />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import {RouterProvider} from "react-router-dom"; // ★ RouterProvider を使用
// import routesLink from "./component/0129/routeLink";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={routesLink} /> {/* ★ これが正しい呼び出し方 */}
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import HookCustom from "./component/0129/HookCustom";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <HookCustom />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import GreetingMessage from "./component/0129/GreetingMessage";
// import LanguageProvider from "./component/0129/LanguageProvider";
// import LanguageToggleButton from "./component/0129/LanguageToggleButton";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <LanguageProvider>
//       <GreetingMessage />
//       <LanguageToggleButton />
//     </LanguageProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import HookMemo from "./component/0122/HookMemo"; // ← 作ったコンポーネントをインポート
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <HookMemo />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import MyThemeProvider from "./component/0122/MyThemeProvider";
// import HookThemeButton from "./component/0122/HookThemeButton";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <MyThemeProvider>
//       <HookThemeButton />
//     </MyThemeProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import HookContext from "./component/0122/HookContext";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HookContext />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import ReducerFavorite from "./component/0122/ReducerFavorite";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ReducerFavorite />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import HookReducerUp from "./component/0115/HookReducerUp";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HookReducerUp />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import HookRefForward from "./component/0115/HookRefForward";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HookRefForward />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import ResizeEffect from "./component/0115/ResizeEffect";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ResizeEffect />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import HookRefNg from "./component/0109/HookRefNg";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HookRefNg />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import HookTimer from "./component/0109/HookTimer";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HookTimer init={10} />
//   </React.StrictMode>
// );

// reportWebVitals();

// import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import SelectNewsPagination from "./component/0109/SelectNewsPagination";
// import "./index.css";

// const client = new QueryClient();
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <QueryClientProvider client={client}>
//       <SelectNewsPagination />
//     </QueryClientProvider>
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import SelectNewsPagination from "./component/0109/SelectNewsPagination";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <SelectNewsPagination />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import TechnologyNewList from "./component/0109/TechnologyNewList";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <TechnologyNewList />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import StateEffect from "./component/1218/StateEffect";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <StateEffect init={0} />
//   </React.StrictMode>
// );

// reportWebVitals();

// import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import React, {Component, Suspense} from "react";
// import ReactDOM from "react-dom/client";
// import QuerySuspence from "./component/1218/QuerySuspence";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// // エラーバウンダリー
// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {hasError: false, error: null};
//   }

//   static getDerivedStateFromError(error) {
//     return {hasError: true, error};
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("Error caught by boundary:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div style={{padding: "20px", color: "#d32f2f", textAlign: "center"}}>
//           <h2>エラーが発生しました</h2>
//           <p>{this.state.error?.message}</p>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// // QueryClient のインスタンスを作成（Suspense対応の設定）
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       suspense: true, // Suspenseを有効化
//     },
//   },
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
//         <Suspense fallback={<div>Loading...</div>}>
//           <QuerySuspence />
//         </Suspense>
//       </ErrorBoundary>
//     </QueryClientProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

// import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import QueryBasic from "./component/1218/QueryBasic";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// // QueryClient のインスタンスを作成
// const queryClient = new QueryClient();

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <QueryBasic />
//     </QueryClientProvider>
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import TodoMuiPeriod from "./component/1218/TodoMuiPeriod";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <TodoMuiPeriod />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import QueryPre from "./component/1211/QueryPre";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <QueryPre />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import {CssBaseline, ThemeProvider} from "@mui/material";
// import FormMui from "./component/1127/FormMui"; // ダークモード対応コンポーネント
// import ChangeThemeMui from "./component/1204/change_theme_mui";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ChangeThemeMui />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import {CssBaseline, ThemeProvider} from "@mui/material";
// import FormMui from "./component/1127/FormMui"; // ダークモード対応コンポーネント

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <FormMui />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import {CssBaseline, ThemeProvider} from "@mui/material";
// import FormMui from "./component/1127/FormMui"; // ダークモード対応コンポーネント

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <FormMui />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import {CssBaseline, ThemeProvider} from "@mui/material";
// import MaterialMode from "./component/1127/MaterialMode"; // ダークモード対応コンポーネント

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <MaterialMode />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import {CssBaseline, ThemeProvider} from "@mui/material";
// import theme from "./component/1127/theme";
// import MaterialBasic from "./component/1127/MaterialBasic";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <MaterialBasic />
//   </ThemeProvider>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import TodoList from "./component/1127/TodoList";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<TodoList />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import MaterialBasic from "./component/1120/MaterialBasic";
// import MaterialDrawer from "./component/1120/MaterialDrawer";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MaterialDrawer />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import MaterialBasic from "./component/1120/MaterialBasic";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MaterialBasic />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FormBasic02 from "./component/1120/FormBasic02";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FormBasic02 />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FormBasic from "./component/1120/FormBasic";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FormBasic />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FormBasic from "./component/1113/FormBasic";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FormBasic />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StateTodo from "./component/1113/StateTodo";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateTodo />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import ValidationCheck from "./component/1113/validationCheck";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ValidationCheck />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StateTodo from "./component/1113/StateTodo";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateTodo />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StateNest from "./component/1106/StateNest";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateNest />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FormCheckMulti from "./component/1106/FormCheckMulti";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FormCheckMulti />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FormRadio from "./component/1106/FormRadio";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FormRadio />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import InputStyle from "./component/1106/inputStyle";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<InputStyle />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FormList from "./component/1030/FormList";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FormList />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FormSelect from "./component/1030/FormSelect";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FormSelect />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FormTextarea from "./component/1030/FormTextarea";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FormTextarea />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StateFormUC from "./component/1030/StateFormUC";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateFormUC />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StateForm from "./component/1030/StateForm";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateForm />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StopCancelEvent from "./component/1030/stopCancelEvent";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StopCancelEvent />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventPassive from "./component/1023/EventPassive";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventPassive />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventOnce from "./component/1023/EventOnce";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventOnce />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventPropagation from "./component/1023/EventPropagation";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventPropagation />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventArgs2 from "./component/1023/EventArgs2";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventArgs2 />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import ColorGeneratorEvent from "./component/1023/colorGeneratorEvent";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ColorGeneratorEvent />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import ShowColor from "./component/1016/showColor";
// import data from "./component/1016/data";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ShowColor colors={data} />);

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventArgs from "./component/1009/EventArgs";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventArgs />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventKey from "./component/1009/EventKey";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventKey />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventPoint from "./component/1009/EventPoint";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventPoint />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventPoint from "./component/1009/EventPoint";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventPoint />);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventObj from "./component/1009/EventObj";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventObj />);

// reportWebVitals();
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventError from "./component/1009/EventError";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventError src="https://placehold.jp/150x250.pg" alt="ロ゙ゴ画像" />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventCompare from "./component/1009/EventCompare";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventCompare />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import EventMouse from "./component/1009/EventMouse";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <EventMouse alt="ロゴ画像" beforeSrc="https://placehold.jp/150x150.png" afterSrc="https://placehold.jp/300x200.png" />
// );
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import FavoriteAnimalList from "./component/1009/FavoriteAnimalList";
// import Data from "./component/1009/Data";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FavoriteAnimalList src={Data} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StateParent from "./component/1002/StateParent";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateParent />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StateParent from "./component/1002/StateParent";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateParent />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StateBasic from "./component/1002/StateBasic";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateBasic init={0} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import Myhello from "./component/1002/MyHello";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Myhello />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import ListTemplate from "./component/1002/ListTemplate";
// import Date from "./component/0918/ProductData";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ListTemplate
//     src={Date}
//     render={(elm) => (
//       <>
//         <dt>
//           <a href={`https://test.com/books/${elm.id}/${elm.isbn}`}>
//             {elm.title}({elm.price}円)
//           </a>
//         </dt>
//         <dd>{elm.summary}</dd>
//       </>
//     )}
//   />
// );
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import TitledPanel from "./component/1002/TitledPanel";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <TitledPanel>
//     <p key="title">ようこそ</p>
//     <p key="body">講師メンバー大募集！</p>
//   </TitledPanel>
// );
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import ChangeThemeBtn from "./component/1002/ChangeThemeBtn";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ChangeThemeBtn shape="square" border={false} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import TitledPanel from "./component/0925/TitledPanel";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<TitledPanel title={<p>ようこそ</p>} body={<p>講師メンバー大募集！</p>} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import StyledPanel from "./component/0925/StyledPanel";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StyledPanel>
//     <p>ようこそ</p>
//     <p>講師メンバー大募集！</p>
//   </StyledPanel>
// );

// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import ForSort from "./component/0925/ForSort";
// import Data from "./component/0918/ProductData";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ForSort src={Data} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import ForFilter from "./component/0925/ForFilter";
// import Data from "./component/0918/ProductData";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ForFilter src={Data} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import ForNest from "./component/0925/ForNest";
// import Data from "./component/0918/ProductData";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ForNest src={Data} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import InputName from "./component/0925/InputName";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<InputName />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import InputName from "./component/0925/InputName";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<InputName />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import ForList from "./component/0918/ForList";
// import ProductData from "./component/0918/ProductData";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ForList src={ProductData} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import StateBasic from "./component/01/StateBasic";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<StateBasic init={0} />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import EventBasic from "./component/01/EventBasic";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventBasic />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import MyHello from "./component/01/MyHello";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyHello name="太郎" age="20" />);
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// setInterval(() => {
//   root.render(<p>現在時刻：{new Date().toLocaleString()}</p>);
// }, 1000);
// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
