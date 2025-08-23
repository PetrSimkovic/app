import { createCookie } from "@remix-run/node";

// Cookie used to persist recipes on the client. The cookie is accessible on all
// routes of the application.
export const palacinkyCookie = createCookie("palacinky", {
  path: "/",
});

/**
 * Internal helper that reads the recipe list from the cookie. Always returns an
 * array to simplify callers.
 * @param {Request} request
 */
async function readData(request) {
  const cookieHeader = request.headers.get("Cookie");
  const data = await palacinkyCookie.parse(cookieHeader);
  return Array.isArray(data) ? data : [];
}

/**
 * Returns only the fields required for the index page.
 * @param {Request} request
 */
export async function getList(request) {
  const data = await readData(request);
  return data.map(({ id, kategorie, img, popis }) => ({
    id,
    kategorie,
    img,
    popis,
  }));
}

/**
 * Inserts a new recipe into the cookie and returns a serialized Set-Cookie
 * header value that should be sent in the response.
 * @param {Request} request
 * @param {{ kategorie: string; img: string; popis: string }} recipe
 */
export async function insertRecipe(request, { kategorie, img, popis }) {
  const data = await readData(request);
  const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  data.push({ id, kategorie, img, popis });
  return palacinkyCookie.serialize(data);
}

/**
 * Retrieves a single recipe by id from the cookie store.
 * @param {Request} request
 * @param {number|string} id
 */
export async function getById(request, id) {
  const data = await readData(request);
  return data.find((item) => item.id === Number(id));
}

/**
 * Deletes a recipe by id and returns a serialized Set-Cookie header value.
 * @param {Request} request
 * @param {number|string} id
 */
export async function deleteRecipe(request, id) {
  const data = await readData(request);
  const filtered = data.filter((item) => item.id !== Number(id));
  return palacinkyCookie.serialize(filtered);
}

/**
 * Updates an existing recipe in the cookie store and returns a serialized
 * Set-Cookie header value.
 * @param {Request} request
 * @param {{ id: number; kategorie: string; img: string; popis: string }} recipe
 */
export async function updateRecipe(request, { id, kategorie, img, popis }) {
  const data = await readData(request);
  const index = data.findIndex((item) => item.id === Number(id));
  if (index >= 0) {
    data[index] = { ...data[index], kategorie, img, popis };
  }
  return palacinkyCookie.serialize(data);
}
