import { useState, useEffect } from "react";

type Pizza = {
  id: number;
  nom: string;
  image: string;
  description: string;
  ingredients: string;
};

export default function HomePage() {
  const [pizzapi, setPizzAPI] = useState<Pizza[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3715/pizzas");
      const cookedData = (await rawData.json()) as Pizza[];
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
