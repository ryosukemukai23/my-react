import {useQuery} from "@tanstack/react-query";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, 2000));

const fetchWeather = async () => {
  await sleep(2000);
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=7cb9a59058af4dfec4366f48174f3dea&units=metric&lang=ja"
  );

  if (res.ok) {
    return res.json();
  }
  throw new Error(res.statusText);
};

export default function QuerySuspence() {
  const {data} = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeather,
  });

  return (
    <figure>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
      <figcaption>
        <strong>{data.name}の天気</strong>
        <br />
        天気: {data.weather[0].description}
        <br />
        気温: {data.main.temp} ℃
        <br />
        体感温度: {data.main.feels_like} ℃
      </figcaption>
    </figure>
  );
}
