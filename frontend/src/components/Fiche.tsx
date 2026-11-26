import { useState, useEffect } from "react";
import { useParams } from "react-router";

type Pizza = {
  id: number;
  nom: string;
  image: string;
  description: string;
  ingredients: string;
};

export default function Fiche() {
  const { id } = useParams();

  const [pizzapi, setPizzAPI] = useState<Pizza[]>([]);

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch("http://localhost:3715/pizzas/:id");
      const cookedData = (await rawData.json()) as Pizza[];
      setPizzAPI(cookedData);
    }
    fetchData();
  }, [id]);

  return (
    <>
      {pizzapi.map((pizza) => {
        return (
          <div key={pizza.id}>
            <p>
              {pizza.nom} : {pizza.ingredients}
            </p>
          </div>
        );
      })}
    </>
  );
}
