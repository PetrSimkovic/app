import style from "./dessert.module.css";

export default function Dessert({ title, price, img }) {
  return (
    <article className={style.dessert}>
      <h1>{title}</h1>
      <p>{price}</p>
      <img src={img} alt={title} width={300} />

    </article>
  );
}
