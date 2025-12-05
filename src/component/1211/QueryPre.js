import {useEffect, useState} from "react";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const fetchWeather = async () => {
  await sleep(2000); // デモ用の遅延（削除してもOK）
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=7cb9a59058af4dfec4366f48174f3dea&units=metric&lang=ja"
  );

  if (res.ok) {
    return res.json();
  }
  throw new Error(res.statusText);
};

export default function QueryPre({id}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchWeather()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div style={{textAlign: "center", fontFamily: "sans-serif"}}>
      <h3>現在の天気：{data.name}</h3>
      <p>気温：{data.main.temp.toFixed(1)} °C</p>
      <p>天気：{data.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        width="100"
        height="100"
      />
      <p>湿度：{data.main.humidity}%</p>
      <p>風速：{data.wind.speed} m/s</p>
    </div>
  );
}
