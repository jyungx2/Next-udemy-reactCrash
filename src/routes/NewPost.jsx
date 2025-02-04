import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  // 💫 useState를 사용한 레거시 코드 (React Router Form 도입 전) 💫
  // - 폼 입력값의 수동적인 상태 관리가 필요했음
  // - 명시적인 이벤트 핸들러 작성이 필요했음 (onChange 등의 이벤트 핸들러를 일일이 작성)
  // - 폼 제출을 수동으로 처리해야 했음 (submit 이벤트를 직접 처리하고 데이터를 수집)

  // 1️⃣ State declarations for form inputs - replaced by React Router Form's automatic data handling
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredAuthor, setEnteredAuthor] = useState("");

  // 2️⃣ Manual event handler for body input - no longer needed with React Router Form
  // function bodyChangeHandler(e) {
  //   setEnteredBody(e.target.value);
  // }

  // function authorChangeHandler(e) {
  //   setEnteredAuthor(e.target.value);
  // }

  // 3️⃣ Manual form submission handler - replaced by React Router's ✨action✨ function
  // function submitHandler(e) {
  //   e.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   };
  // }

  return (
    <Modal>
      {/* 
          ⭐ React Router의 Form 컴포넌트 사용:
          1. 브라우저 기본 동작 방지
          2. 입력 데이터를 자동으로 수집
          3. route의 action 함수로 전달
          
          ♥︎ name 속성:
          - 서버로 전송될 데이터의 키 값으로 사용
          - action 함수에서 formData.get('author')와 같이 접근 가능
        */}

      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          {/* button의 default type = submit으로, 해당 버튼에 의해 submit되는 기본동작을 막고 싶다면 type속성을 button으로 설정해라. */}
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

{
  /* 
  🔔 Form method="post"의 의미와 동작 방식:
  
  1. ❌method="post" 설정은 실제 HTTP POST 요청을 보내지 않습니다.❌
     이는 여전히 클라이언트 사이드 코드입니다.
  
  2. React Router는 내부적으로:
     - 폼 데이터를 포함한 request 객체를 생성
     - 이 request 객체에는 우리가 action 함수에서 사용할 method를 포함(✨어떤 폼이 제출됐는지 확인하기 위해✨)
     ex) request.formData() : formData 메소드 (promise 반환하므로 await 필수 사용)
     ex) formData.get('body') : form 데이터 중, name='body'인 데이터값만 가져올 수 있음.

  3. action 함수에서 활용:
     - 여러 폼이 같은 route와 action을 공유할 때
     - ✨request의 method를 통해 "어떤 폼이 제출"되었는지 구분 가능✨
  
  4. 시맨틱한 의미:
     - POST는 새로운 리소스 생성을 의미하는 HTTP 메소드
     - 새 게시물을 생성하는 이 폼의 의도와 일치
     - 실제 백엔드 요청은 없지만 시맨틱한 의미는 유지
*/
}

// 🌟 All performed by React Router!! 🌟
// ⚑ Action 함수: Form 제출 시 React Router가 자동으로 실행하는 함수
export async function action({ request }) {
  // formData 객체 생성 및 일반 객체로 변환
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '...', author: '...'}

  // 서버로 POST 요청 전송
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 데이터 전송 후 홈페이지로 리다이렉트
  return redirect("/");
}
