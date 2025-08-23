import { useLoaderData } from "@remix-run/react";
import { getById } from "../Palacinkyy/api/palacinky";

export async function loader({ params, request }) {
  const recept = await getById(request, params.id);
  if (!recept) {
    throw new Response("Not Found", { status: 404 });
  }
  return recept;
}

export default function Recept() {
  const recept = useLoaderData();
  return (
    <article>
      <h1>{recept.kategorie}</h1>
      {recept.img && <img src={recept.img} alt={recept.kategorie} />}
      {recept.popis && <p>{recept.popis}</p>}
    </article>
  );
}
