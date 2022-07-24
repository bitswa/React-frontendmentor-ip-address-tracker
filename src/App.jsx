import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_A94mQ7pkUV7stbgpYr9EejJPcwxNy&ipAddress=8.8.8.8`
    )
      .then((response) => response.json())
      .then((data) => {
        setData([data]);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <Header />
      <Main data={data} />
    </div>
  );
}
