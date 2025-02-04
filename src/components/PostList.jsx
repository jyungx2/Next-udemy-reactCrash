import Post from "./Post";
import classes from "./PostList.module.css";

// ✅ Posts에 의해 렌더링되는 PostList 컴포넌트는 Posts가 가지고 있는 loader의 영향을 받는다.
// Posts 컴포넌트에 작성된 loader함수가 useLoaderData라는 훅에 의해 리턴되어져 여기서도 loader를 사용할 수 있음.
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  /* 
  ⭐ React Router의 loader 사용으로 인한 코드 개선:
  - useState, useEffect 제거 가능
  - 데이터 fetching 로직을 route 컴포넌트로 이동
  - loading 상태 관리 불필요 (React Router가 처리)
  
  // 이전 코드
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);
  */

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // ❌  Not ideal approach:
    // setPosts([postData, ...posts]);
    // Because there's a rule which you should use (arrow) function to update state with previous state value(=existingPosts) in React.

    // ✅ 권장하는 방법 - 함수형 업데이트 사용:
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
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
