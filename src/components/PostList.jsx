import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="jiyoung" body="REACT IS FUN!" />
      <Post author="suzy" body="JS IS FUN!" />
      <Post author="suzy" body="JS IS FUN!" />
      <Post author="suzy" body="JS IS FUN!" />
      <Post author="suzy" body="JS IS FUN!" />
      <Post author="suzy" body="JS IS FUN!" />
    </ul>
  );
}

export default PostList;
