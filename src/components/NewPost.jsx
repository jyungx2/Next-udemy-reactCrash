import classes from "./NewPost.module.css";

function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
  // let enteredBody = "";
  // const [enteredBody, setEnteredBody] = useState("");

  // function changeBodyHandler(e) {
  //   setEnteredBody(e.target.value);
  // }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        {/* button의 default type = submit으로, 해당 버튼에 의해 submit되는 기본동작을 막고 싶다면 type속성을 button으로 설정해라. */}
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
