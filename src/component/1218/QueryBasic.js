import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";

const queryClient = new QueryClient();

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

function QueryBasic() {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeather,
  });

  if (isLoading) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          fontSize: "18px",
          color: "#666",
        }}
      >
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#d32f2f",
          fontSize: "16px",
        }}
      >
        Error: {error.message}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <figure
        style={{
          margin: 0,
          padding: "30px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          style={{width: "100px", height: "100px"}}
        />
        <figcaption
          style={{
            fontSize: "20px",
            color: "#333",
            marginTop: "10px",
          }}
        >
          {data.weather[0].description} / {data.main.temp}℃
        </figcaption>
      </figure>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryBasic />
    </QueryClientProvider>
  );
}
