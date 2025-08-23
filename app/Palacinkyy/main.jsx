import Article from "./article.jsx";


export default function Main({ list }) {
  return (
    <section>
      {list.map((palacinky) => (
        <Article key={palacinky.kategorie} city={palacinky.kategorie} img={palacinky.img} />
      ))}
    </section>
  );
}
