import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Blog from '../components/Blog';
import { getPosts } from '../db.server';

export const loader: LoaderFunction = async () => {
  return await getPosts();
};

export default function Index() {
  const posts = useLoaderData<typeof loader>();
  return <Blog posts={posts} />;
}
