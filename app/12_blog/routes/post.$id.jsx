import { useLoaderData } from "@remix-run/react";
import { getPostDetails } from "../12_blog/api/getPosts";
import Header from "../12_blog/header";
import Footer from "../12_blog/footer";

// loader: Načte detail příspěvku podle id z URL
export async function loader({ params }) {
  const postId = params.id; // vezme id z adresy
  const post = await getPostDetails(postId); // načte detail příspěvku z databáze
  return { post: post[0] }; // pošle první (a jediný) příspěvek do komponenty
}

// Komponenta pro zobrazení detailu příspěvku
export default function Post() {
  const { post } = useLoaderData(); // vezme detail příspěvku z loaderu

  return (
    <div>
      <Header /> {/* Hlavička */}
      <h1>Detail příspěvku</h1>
      <h2>{post.title}</h2> {/* Titulek příspěvku */}
      <p>{post.text}</p> {/* Text příspěvku */}
      <p>{post.created_at}</p> {/* Datum vytvoření */}
      <Footer copyright={"2025"} /> {/* Patička */}
    </div>
  );
}
