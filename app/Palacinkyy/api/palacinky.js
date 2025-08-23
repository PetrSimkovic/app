import { sql } from "./sql";

export async function getList() {
  const response = await sql(`SELECT * FROM ------`);
  console.log(response);

  let list = response;
  return list;
}
// Do --- napsat název tabulky ze které chceš brát data