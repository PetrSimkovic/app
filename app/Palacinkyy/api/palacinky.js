// Simple in-memory store for recipes. This replaces the previous
// database-backed implementation so that the application works without
// any external dependencies.

/** @type {{ id: number; kategorie: string; img: string; popis: string }[]} */
let data = [];

export async function getList() {
  // Return only the basic fields used on the index page.
  return data.map(({ id, kategorie, img }) => ({ id, kategorie, img }));
}

export async function insertRecipe({ kategorie, img, popis }) {
  const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  data.push({ id, kategorie, img, popis });
}

export async function getById(id) {
  return data.find((item) => item.id === Number(id));
}
