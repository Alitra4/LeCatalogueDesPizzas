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
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3715/pizzas");
      const cookedData = (await rawData.json()) as Pizza[];
      setPizzas(cookedData);
    }
    fetchData();
  }, []);

  return (
    <>
      {pizzas.map((Pizza) => {
        return (
          <div key={Pizza.id}>
            <Link to={`/pizzas/${Pizza.id}`}>
              <p>
                {Pizza.nom} : {Pizza.ingredients}
              </p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
