import Post from "./components/Post"; // 💥 JSX 코드를 사용하는 환경에서 해당JSX파일 이름은 무조건 대문자로 시작해야 한다!(하지만, JSX파일 내부에서는 소문자로 하나 대문자로 하나 상관없지만, 보통은 똑같이 대문자로 시작하는게 기본적인 룰.)
// => 소문자로 시작하는 컴포넌트 파일은 custom compoenent가 아닌, default elements로 취급되어 리액트에 의해 실행되지 않기 때문..!

function App() {
  return (
    <h1>
      <Post />
      Hello World!
    </h1>
  );
}

export default App;

// Syntax of havingg HTML in Javascript is called 'JSX'.
// All about React is components.
// Functions that returns JSX code are React components.
