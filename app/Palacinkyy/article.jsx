import { Link } from "@remix-run/react";

/**
 * @param {number} id
 * @param {string} city
 * @param {string} img
 */
export default function Article({ id, city, img }) {
  return (
    <article>
      <Link to={`/recept/${id}`}><h1>{city}</h1></Link>
      <img src={img} alt={city} />
    </article>
  );
}
