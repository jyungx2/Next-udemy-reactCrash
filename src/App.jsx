import Post from "./components/Post"; // 💥 JSX 코드를 사용하는 환경에서 해당JSX파일 이름은 무조건 대문자로 시작해야 한다!(하지만, JSX파일 내부에서는 소문자로 하나 대문자로 하나 상관없지만, 보통은 똑같이 대문자로 시작하는게 기본적인 룰.)
// => 소문자로 시작하는 컴포넌트 파일은 custom compoenent가 아닌, default elements로 취급되어 리액트에 의해 실행되지 않기 때문..!

function App() {
  return (
    // 1. JSX code를 리턴할 때는 무조건 하나의 HTML 태그만 리턴이 가능하기 때문에, 무조건 하나의 큰 Wrapper 역할을 하는 태그로 감싸줘야 한다. (여기서는 <main>태그가 wrapper 역할.)
    // 2. tag사이에 컨텐트가 없다면, 무조건 self-closing tag로 쓰거나, opening/closing tag를 써줘야 한다. 그냥 opening(=void) tag로 쓰면 에러 발생!
    <main>
      <Post author="jiyoung" body="REACT IS FUN!" />
      <Post author="suzy" body="JS IS FUN!" />
    </main>
  );
}

export default App;

// Syntax of havingg HTML in Javascript is called 'JSX'.
// All about React is components.
// Functions that returns JSX code are React components.
