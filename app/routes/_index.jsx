import Header from "../Palacinkyy/header.jsx";
import Main from "../Palacinkyy/main.jsx";
import { useLoaderData } from "@remix-run/react";
import { getList } from "../Palacinkyy/api/palacinky";


export const meta = () => {
  return [{ title: "Palacinky" }, { name: "description", content: "Palacinky" }];
};

export async function loader() {
  let list = await getList();
  return list;
}


export default function Index() {
  let list = useLoaderData();
  return (
    <>
      <Header />
      <Main list={list} />
    </>
  );
}

