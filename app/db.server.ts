import mysql from 'mysql2/promise';

export async function getConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

export async function getPosts() {
  const conn = await getConnection();
  const [rows] = await conn.query(
    "SELECT id, Titulek AS title FROM blogN ORDER BY id DESC"
  );
  await conn.end();
  return rows as { id: number; title: string }[];
}

export async function getPost(id: number) {
  const conn = await getConnection();
  const [rows] = await conn.query(
    "SELECT id, Titulek AS title, `text` AS content FROM blogN WHERE id = ?",
    [id]
  );
  await conn.end();
  const posts = rows as {
    id: number;
    title: string;
    content: string;
  }[];
  return posts[0];
}
