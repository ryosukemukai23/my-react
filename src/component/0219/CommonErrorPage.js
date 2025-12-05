import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export default function CommonErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // Response か react-router の json で投げられたエラー
    // error.data はオブジェクト（JSON）であることが期待される
    const data = error.data ?? {};
    const message = data.message ?? error.statusText ?? "不明なエラーが発生しました";

    switch (error.status) {
      case 404:
        return (
          <div>
            <h3>404 - Not Found</h3>
            <p>{message}</p>
          </div>
        );
      case 401:
        return (
          <div>
            <h3>401 - Unauthorized</h3>
            <p>{message}</p>
          </div>
        );
      case 501:
        return (
          <div>
            <h3>API エラー</h3>
            <p>{message}</p>
          </div>
        );
      default:
        return (
          <div>
            <h3>エラー</h3>
            <p>{message}</p>
          </div>
        );
    }
  }

  // 非 Response の例外（普通の Error など）
  return (
    <div>
      <h3>Something went wrong</h3>
      <p>詳細な問題：{error?.message ?? String(error)}</p>
    </div>
  );
}
