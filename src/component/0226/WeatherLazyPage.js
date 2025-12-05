import {useLoaderData} from "react-router-dom";

// 疑似待機関数（遅延表示確認用）
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// loader関数
export const loader = async ({params}) => {
  await sleep(2000); // 2秒遅延

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=7cb9a59058af4dfec4366f48174f3dea&units=metric&lang=ja`
  );

  if (!res.ok) {
    switch (res.status) {
      case 404:
        throw new Response(JSON.stringify({message: "都市名を正しく入力してください"}), {
          status: 404,
          headers: {"Content-Type": "application/json"},
        });
      case 401:
        throw new Response(JSON.stringify({message: "APIキーが不正です"}), {
          status: 401,
          headers: {"Content-Type": "application/json"},
        });
      default:
        throw new Response(JSON.stringify({message: "APIエラーが発生しました"}), {
          status: 501,
          headers: {"Content-Type": "application/json"},
        });
    }
  }

  return res.json(); // useLoaderDataで受け取るためJSONに変換
};

// コンポーネント
export function Component() {
  const data = useLoaderData();
  return (
    <figure style={{textAlign: "center"}}>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
        alt={data?.weather?.[0]?.description || ""}
      />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
      <p>気温: {data?.main?.temp}°C</p>
    </figure>
  );
}

Component.displayName = "WeatherLazyPage";

// ErrorBoundary
export function ErrorBoundary({error}) {
  return (
    <div style={{padding: "2rem", color: "red"}}>
      <h1>エラーが発生しました</h1>
      <p>Status: {error?.status || "不明"}</p>
      <p>Message: {error?.data?.message || error?.message || "何らかのエラーです"}</p>
    </div>
  );
}
