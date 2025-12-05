import {useLoaderData} from "react-router-dom";

export default function WeatherPage() {
  const data = useLoaderData();
  return (
    <figure>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
        alt={data?.weather?.[0]?.description}
      />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
      <figcaption>{data?.main?.temp}°C</figcaption>
      <figcaption>{data?.name}</figcaption>
      <figcaption>{data?.sys?.country}</figcaption>
      <figcaption>{data?.wind?.speed}m/s</figcaption>
      <figcaption>{data?.wind?.deg}°</figcaption>
      <figcaption>{data?.main?.humidity}%</figcaption>
      <figcaption>{data?.main?.pressure}hPa</figcaption>
      <figcaption>{data?.main?.feels_like}°C</figcaption>
      <figcaption>{data?.main?.temp_max}°C</figcaption>
      <figcaption>{data?.main?.temp_min}°C</figcaption>
      <figcaption>{data?.visibility}m</figcaption>
      <figcaption>{data?.clouds?.all}%</figcaption>
      <figcaption>{data?.dt_txt}</figcaption>
      <figcaption>{data?.cod}</figcaption>
      <figcaption>{data?.message}</figcaption>
      <figcaption>{data?.cnt}</figcaption>
    </figure>
  );
}
