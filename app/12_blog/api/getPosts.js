import { sql } from "./sql";

// 12_blog je název tabulky v databázi!!!!!!!!!!!!

// SQL dotaz pro získání všech příspěvků
export async function getPosts() {
  const response = await sql(`SELECT * FROM 12_blog ORDER BY created_at DESC`);

  let postData = response;
  return postData;
}

// SQL dotaz pro získání detailů jednotlivých příspěvků podle ID
export async function getPostDetails(postId) {
  const response = await sql(`SELECT * FROM 12_blog WHERE id=${postId}`);

  let postDetails = response;
  return postDetails;
}

// SQL dotaz pro vytvoření nového příspěvku
export async function createPost(newPost) {
  const response = await sql(
    `INSERT INTO 12_blog (title, text, created_at) VALUES ('${newPost.title}', '${newPost.text}', '${newPost.created_at}')`
  );
  return null;
}
