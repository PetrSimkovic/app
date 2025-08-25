import React from 'react';
import { Link } from '@remix-run/react';

export interface PostListItem {
  id: number;
  title: string;
}

interface BlogProps {
  posts: PostListItem[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
