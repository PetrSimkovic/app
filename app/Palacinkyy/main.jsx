import Article from "./article.jsx";

// Renders a list of pancake articles. If `list` is not an array the
// component now gracefully falls back to rendering nothing instead of
// throwing an error.
export default function Main({ list }) {
  const items = Array.isArray(list) ? list : [];

  return (
    <section>
      {items.map((palacinky) => (
        <Article
          key={palacinky.id}
          id={palacinky.id}
          city={palacinky.kategorie}
          img={palacinky.img}
        />
      ))}
    </section>
  );
}
