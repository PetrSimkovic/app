import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { addComment, getComments, getPost } from '../db.server';

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
  const comments = await getComments(id);
  return { post, comments };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const idParam = formData.get('postId');
  const content = formData.get('content');
  const id = typeof idParam === 'string' ? Number(idParam) : NaN;
  if (typeof content !== 'string' || isNaN(id)) {
    return new Response('Bad Request', { status: 400 });
  }
  await addComment(id, content);
  return redirect(`/item?id=${id}`);
}

export default function ItemRoute() {
  const { post, comments } = useLoaderData<typeof loader>();
  return (
    <div>
      <article>
        <h2>{post.title}</h2>
        <p>{new Date(post.created_at).toLocaleDateString()}</p>
        <div>{post.content}</div>
      </article>
      <section>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.content}</p>
              <p>{new Date(comment.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
        <Form method="post">
          <input type="hidden" name="postId" value={post.id} />
          <textarea name="content" />
          <button type="submit">Add Comment</button>
        </Form>
      </section>
    </div>
  );
}
