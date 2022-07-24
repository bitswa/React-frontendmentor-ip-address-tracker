import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export function App() {
  
  const [data, setData] = useState([]);
  const [ip, setIp] = useState("8.8.8.8");

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${import.meta.env.VITE_BASE_URL}/country?apiKey=${
        import.meta.env.VITE_API_KEY
      }&ipAddress=${ip}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData([data]);
      });
  };

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} setIp={setIp} />
      <Main data={data} />
    </div>
  );
}
