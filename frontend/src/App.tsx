import { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";

function App() {
  type log = {
    nom: string;
    image: string;
    description: string;
    ingredients: string;
  };

  const [logs, setLogs] = useState<log[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("https://localhost:3715/logs");
      const cookedData = (await rawData.json()) as log[];
      setLogs(cookedData);
    }
    fetchData();
  }, []);

  return (
    <>
      {logs.map((log) => {
        return <p>{log.nom}</p>;
      })}
    </>
  );
}

export default App;
