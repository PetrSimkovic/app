import { Form } from "@remix-run/react";

// Formulář pro nový příspěvek
// Potřeba naimportovat funkci Form

export default function AddPost() {
  return (
    <Form method="post">
      <input type="text" name="title" placeholder="Title" />
      <textarea name="text" placeholder="Text"></textarea>
      <input type="date" name="created_at" id="created_at" />
      <button type="submit">Add Post</button>
    </Form>
  );
}
