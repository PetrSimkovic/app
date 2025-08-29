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
    'SELECT id, title, created_at FROM posts ORDER BY created_at DESC'
  );
  await conn.end();
  return rows as { id: number; title: string; created_at: Date }[];
}

export async function getPost(id: number) {
  const conn = await getConnection();
  const [rows] = await conn.query(
    'SELECT id, title, content, created_at FROM posts WHERE id = ?',
    [id]
  );
  await conn.end();
  const posts = rows as {
    id: number;
    title: string;
    content: string;
    created_at: Date;
  }[];
  return posts[0];
}

export async function getComments(postId: number) {
  const conn = await getConnection();
  const [rows] = await conn.query(
    'SELECT id, content, created_at FROM comments WHERE post_id = ? ORDER BY created_at DESC',
    [postId]
  );
  await conn.end();
  return rows as { id: number; content: string; created_at: Date }[];
}

export async function addComment(postId: number, content: string) {
  const conn = await getConnection();
  await conn.query(
    'INSERT INTO comments (post_id, content) VALUES (?, ?)',
    [postId, content]
  );
  await conn.end();
}
