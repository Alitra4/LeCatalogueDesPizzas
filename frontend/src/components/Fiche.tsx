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

  const [pizzas, setPizzas] = useState<Pizza>();

  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch(`http://localhost:3715/pizzas/${id}`);
      const cookedData = (await rawData.json()) as Pizza;
      setPizzas(cookedData);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div>
        <p>
          {pizzas?.nom} : {pizzas?.ingredients}
        </p>
      </div>
    </>
  );
}
