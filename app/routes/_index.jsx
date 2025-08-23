import Header from "../Palacinkyy/header.jsx";
import Main from "../Palacinkyy/main.jsx";
import { Form, useLoaderData } from "@remix-run/react";
import { getList, insertRecipe } from "../Palacinkyy/api/palacinky";
import { redirect } from "@remix-run/node";


export const meta = () => {
  return [{ title: "Palacinky" }, { name: "description", content: "Palacinky" }];
};

export async function loader({ request }) {
  let list = await getList(request);
  return list;
}

export async function action({ request }) {
  const formData = await request.formData();
  const kategorie = formData.get("kategorie")?.trim();
  const img = formData.get("img")?.trim();
  const popis = formData.get("popis");
  if (kategorie && img) {
    const cookie = await insertRecipe(request, { kategorie, img, popis });
    return redirect("/", { headers: { "Set-Cookie": cookie } });
  }
  return redirect("/");
}


export default function Index() {
  let list = useLoaderData();
  return (
    <>
      <Header />
      <Form method="post">
        <input name="kategorie" placeholder="Název" />
        <input name="img" placeholder="URL obrázku" />
        <input name="popis" placeholder="Popis" />
        <button type="submit">Přidat</button>
      </Form>
      <Main list={list} />
    </>
  );
}

