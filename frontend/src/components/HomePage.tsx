import { useState, useEffect } from "react";
import { Link } from "react-router";

type Pizza = {
  id: number;
  nom: string;
  image: string;
  description: string;
  ingredients: string;
};

export default function HomePage() {
  const [pizza, setPizza] = useState<Pizza[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3715/pizzas");
      const cookedData = (await rawData.json()) as Pizza[];
      setPizza(cookedData);
    }
    fetchData();
  }, []);

  return (
    <>
      {pizza.map((pizza) => {
        return (
          <div key={pizza.id}>
            <Link to={`/pizzas/${pizza.id}`}>
              <p>
                {pizza.nom} : {pizza.ingredients}
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
