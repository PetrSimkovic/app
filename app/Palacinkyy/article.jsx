import { Link, Form } from "@remix-run/react";

/**
 * @param {number} id
 * @param {string} city
 * @param {string} img
 * @param {string} [popis]
 */
export default function Article({ id, city, img, popis }) {
  return (
    <article>
      <Link to={`/recept/${id}`}><h1>{city}</h1></Link>
      <img src={img} alt={city} />
      <Form method="post">
        <input type="hidden" name="id" value={id} />
        <button type="submit" name="_action" value="delete">
          Smazat
        </button>
      </Form>
      <Form method="post">
        <input type="hidden" name="id" value={id} />
        <input name="kategorie" defaultValue={city} />
        <input name="img" defaultValue={img} />
        <input name="popis" defaultValue={popis || ""} />
        <button type="submit" name="_action" value="edit">
          Upravit
        </button>
      </Form>
    </article>
  );
}
