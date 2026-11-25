import { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";

function App() {
  const [logs, setLogs] = useState<log[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("https://localhost3715/logs");
      const cookedData = await rawData.json();
      setLogs(cookedData);
    }
    fetchData();
  }, []);

  return (
    <>
      {logs.map((log) => {
        return <p>logs.nom</p>;
      })}
    </>
  );
}

export default App;
