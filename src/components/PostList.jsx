import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  return (
    <>
      {/* {modalContent} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {/* <Post author={enteredAuthor} body={enteredBody} /> */}
      </ul>
    </>
  );
}

export default PostList;
