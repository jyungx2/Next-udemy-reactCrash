import classes from "./NewPost.module.css";

function NewPost(props) {
  // let enteredBody = "";
  // const [enteredBody, setEnteredBody] = useState("");

  // function changeBodyHandler(e) {
  //   setEnteredBody(e.target.value);
  // }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

export default NewPost;
