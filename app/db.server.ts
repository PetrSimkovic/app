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
  const posts = rows as { id: number; title: string; created_at: Date }[];
  return posts.map((post) => ({
    ...post,
    created_at: post.created_at.toISOString(),
  }));
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
  const post = posts[0];
  return post
    ? {
        ...post,
        created_at: post.created_at.toISOString(),
      }
    : undefined;
}
