import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // ❌  Not ideal approach:
    // setPosts([postData, ...posts]);
    // Because there's a rule which you should use (arrow) function to update state with previous state value(=existingPosts) in React.

    // ✅ 권장하는 방법 - 함수형 업데이트 사용:
    setPosts((existingPosts) => [postData, ...existingPosts]);
    // 이 화살표 함수는 자동으로 current state snapshot을 받을 것이고, 이에 따라 이미 존재하는 기존의 상태값을 반영할 수 있다.
    /* 
    함수형 업데이트를 사용해야 하는 이유:
    1. React는 상태 업데이트를 즉시 실행하지 않고 단지 '스케줄링'합니다.
    2. 여러 상태 업데이트가 대기열에 있을 때, 직접 'posts'를 참조(using the direct reference to 'posts')하면 최신 상태를 반영하지 못할 수 있습니다.
    3. 함수형 업데이트 패턴(prevState => newState)을 사용하면 항상 가장 최신의 상태 스냅샷으로 작업할 수 있습니다.
    4. React는 업데이트가 처리될 때 ✨상태 매개변수(existingPosts)가 항상 최신 상태 값을 포함하도록 보장✨합니다.
    👉 이렇게 함수형 업데이트를 사용하면 React의 상태 관리 메커니즘과 더 잘 동작하며, 예기치 않은 버그를 방지할 수 있습니다. 특히 여러 상태 업데이트가 빠르게 연속해서 일어나는 상황에서 더욱 중요합니다.
    
    실제 동작 예시:
    - 만약 빠르게 연속된 여러 포스트 추가가 있을 때:
      * 일반 방식: 이전 'posts' 상태를 참조하여 '오래된 데이터' 사용 가능성 o
      * 함수형 업데이트: 🌟매번 최신 상태🌟를 기반으로 업데이트 보장
    */
  }

  return (
    <>
      {/* {modalContent} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* If you map an array to an array of JSX elements, you should add the special key prop to the JSX element! */}
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
