import { Link } from "@remix-run/react";

/**
 * @param {string} city
 * @param {string} img
 */
export default function Article({ city, img }) {
  return (
    <article>
      <Link to="/recept"><h1>{city}</h1></Link>
     
      <img src={img} alt={city} width={300} />
    </article>
  );
  
}
