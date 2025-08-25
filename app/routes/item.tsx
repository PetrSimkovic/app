import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPost } from '../db.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const idParam = url.searchParams.get('id');
  const id = idParam ? Number(idParam) : NaN;
  if (isNaN(id)) {
    throw new Response('Not Found', { status: 404 });
  }
  const post = await getPost(id);
  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }
  return post;
}

export default function ItemRoute() {
  const post = useLoaderData<typeof loader>();
  return (
    <article>
      <h2>{post.title}</h2>

      <div>{post.content}</div>
    </article>
  );
}
