import mysql from 'mysql2/promise';

export async function getConnection() {
  try {
    return await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectTimeout: 5000,
    });
  } catch (error) {
    console.error('Database connection failed', error);
    throw error;
  }
}

export async function getPosts() {
  const conn = await getConnection();
  try {
    const [rows] = await conn.query(
      "SELECT id, Titulek AS title FROM blogN ORDER BY id DESC"
    );
    return rows as { id: number; title: string }[];
  } finally {
    await conn.end();
  }
}

export async function getPost(id: number) {
  const conn = await getConnection();
  try {
    const [rows] = await conn.query(
      "SELECT id, Titulek AS title, `text` AS content FROM blogN WHERE id = ?",
      [id]
    );
    const posts = rows as {
      id: number;
      title: string;
      content: string;
    }[];
    return posts[0];
  } finally {
    await conn.end();
  }
}
