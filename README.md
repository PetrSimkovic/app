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

Copy `.env.example` to `.env` and adjust as needed. The example configuration connects to a local MySQL server:

```
DB_HOST=localhost
DB_USER=simkovicp22
DB_PASSWORD=nZBm6UG7sz
DB_NAME=2it_simkovicp22
```

These values map directly to the `DB_HOST`, `DB_USER`, `DB_PASSWORD` and `DB_NAME` environment variables used by the app.

## Development

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).
