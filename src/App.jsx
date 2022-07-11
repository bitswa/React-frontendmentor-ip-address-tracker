import { useEffect } from "react"

export function App() {
  
  useEffect(() => {
    const requestIp = async () => {
      const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_A94mQ7pkUV7stbgpYr9EejJPcwxNy&ipAddress=8.8.8.8`)
      const data = await response.json();
      console.log(data)
    }
    requestIp();
  }, [])

  return (
    <div className="App">
      <div>
        <h1>IP Address Tracker</h1>

      </div>
      <div>

      </div>
    </div>
  )
}