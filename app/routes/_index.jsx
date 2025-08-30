import { useLoaderData } from "@remix-run/react";
import { createPost, getPosts } from "../12_blog/api/getPosts";
import Blog from "../12_blog/blog";
import Footer from "../12_blog/footer";
import Header from "../12_blog/header";
import AddPost from "../12_blog/addPost";

// NEZAPOMENOUT NA IMPORTY

// Nastaví meta informace pro stránku (titulek, popis)
export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// loader: Načte příspěvky z databáze, když se stránka načítá
export async function loader() {
  const postData = await getPosts(); // vezme všechny příspěvky
  return { postData }; // pošle je do komponenty
}

// Hlavní komponenta stránky
export default function Index() {
  const { postData } = useLoaderData(); // vezme příspěvky z loaderu

  return (
    <div>
      <Header /> {/* Hlavička */}
      <Blog posts={postData} /> {/* Zobrazí všechny příspěvky */}
      <AddPost /> {/* Formulář pro přidání nového příspěvku */}
      <Footer copyright={"2025"} /> {/* Patička */}
    </div>
  );
}

// action: Spustí se, když někdo odešle formulář pro nový příspěvek
export async function action({ request }) {
  const newPostData = await request.formData(); // vezme data z formuláře
  const newPost = {
    title: newPostData.get("title"),
    text: newPostData.get("text"),
    created_at: newPostData.get("created_at"),
  };
  await createPost(newPost); // uloží nový příspěvek do databáze
  return null;
}
