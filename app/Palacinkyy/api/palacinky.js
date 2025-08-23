import { sql } from "./sql";

const TABLE = "palacinky";

export async function initDb() {
  await sql(`CREATE TABLE IF NOT EXISTS ${TABLE} (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kategorie VARCHAR(255),
    img VARCHAR(255),
    popis TEXT
  )`);
}

export async function getList() {
  await initDb();
  const response = await sql(`SELECT id, kategorie, img FROM ${TABLE}`);
  return Array.isArray(response?.data) ? response.data : response;
}

export async function insertRecipe({ kategorie, img, popis }) {
  await initDb();
  await sql(
    `INSERT INTO ${TABLE} (kategorie, img, popis) VALUES ('${kategorie}', '${img}', '${popis}')`
  );
}

export async function getById(id) {
  await initDb();
  const res = await sql(`SELECT * FROM ${TABLE} WHERE id=${id}`);
  return Array.isArray(res?.data) ? res.data[0] : res[0];
}
