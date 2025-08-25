import React from 'react';
import { Link } from '@remix-run/react';

export interface PostListItem {
  id: number;
  title: string;
  created_at: string;
}

interface BlogProps {
  posts: PostListItem[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <main>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{new Date(post.created_at).toLocaleDateString()}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
