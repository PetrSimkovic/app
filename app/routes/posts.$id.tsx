import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPost } from '../db.server';

export async function loader({ params }: LoaderFunctionArgs) {
  const id = Number(params.id);
  if (isNaN(id)) {
    throw new Response('Not Found', { status: 404 });
  }
  const post = await getPost(id);
  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }
  return post;
}

export default function PostRoute() {
  const post = useLoaderData<typeof loader>();
  return (
    <article>
      <h2>{post.title}</h2>
      <div>{post.content}</div>
    </article>
  );
}
