import { Link } from "@remix-run/react";

// Tohle je blog. Dostane seznam příspěvků (posts).
// Pro každý příspěvek udělá rámeček (article).
// V rámečku je odkaz. Když na něj klikneš, jdeš na stránku s tím příspěvkem.
// V odkazu je velký nadpis s názvem příspěvku.
// Prostě vezme všechny příspěvky a ukáže je jako odkazy.

export default function Blog({ posts }) {
  return (
    <section>
      {posts.map((post) => (
        <article key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
        </article>
      ))}
    </section>
  );
}
