import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    // 1. JSX code를 리턴할 때는 무조건 하나의 HTML 태그만 리턴이 가능하기 때문에, 무조건 하나의 큰 WrPostser 역할을 하는 태그로 감싸줘야 한다. (여기서는 <main>태그가 wrPostser 역할.)
    // 2. tag사이에 컨텐트가 없다면, 무조건 self-closing tag로 쓰거나, opening/closing tag를 써줘야 한다. 그냥 opening(=void) tag로 쓰면 에러 발생!
    <>
      {/* <NewPost/> comp is open as an overlay above the list of posts. */}
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

// Syntax of havingg HTML in Javascript is called 'JSX'.
// All about React is components.
// Functions that returns JSX code are React components.
