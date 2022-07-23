import { useEffect } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/main";

export function App() {
  useEffect(() => {
    const requestIp = async () => {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=at_A94mQ7pkUV7stbgpYr9EejJPcwxNy&ipAddress=8.8.8.8`
      );
      const data = await response.json();
      console.log(data);
    };
    requestIp();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
