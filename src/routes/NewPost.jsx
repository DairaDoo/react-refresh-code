import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link type="button" to="/">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
  console.log(postData);

  const response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/posts`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    // Si la respuesta es correcta, redirige a la página principal.
    return redirect('/');
  } else {
    // Si algo sale mal, podrías manejarlo aquí.
    console.error('Failed to create a new post.');
  }
}

