# Blogoprava

This is a simple blog built with the Remix framework. It loads posts from a MySQL database and displays them on the landing page.

## Database

Create a `posts` table on your MySQL server with the following columns:

```sql
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

Set the database connection credentials in environment variables `DB_HOST`, `DB_USER`, `DB_PASSWORD` and `DB_NAME`.

## Development

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).
