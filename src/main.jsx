import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ✅ loader as ~ : "Alias" (더 많은 Loader를 설치해야 할 수도 있으므로)
import Posts, { loader as postsLoader } from "./routes/Posts";
import "./index.css";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";

/* 
React Router v6.4+ Data Loading
------------------------------
1. Posts 컴포넌트(부모)에 정의된 loader가 실행되고
2. 그 데이터를 PostList 컴포넌트(자식)에서 useLoaderData로 접근
3. loader가 완료될 때까지 route element는 렌더링되지 않음
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader, // this loader is executed before the element is rendered. (=> As long as the loader executes, this route element isn't rendered.)
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
