import { useState, useEffect } from "react";

type pizza = {
  id: number;
  nom: string;
  image: string;
  description: string;
  ingredients: string;
};

export default function HomePage() {
  const [pizzapi, setPizzAPI] = useState<pizza[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3715/logs");
      const cookedData = (await rawData.json()) as pizza[];
      setPizzAPI(cookedData);
    }
    fetchData();
  }, []);

  return (
    <>
      {pizzapi.map((pizza) => {
        return (
          <p key={pizza.id}>
            {pizza.nom} : {pizza.ingredients}
          </p>
        );
      })}
    </>
  );
}
