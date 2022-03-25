import LoginButton from "../components/LoginButton";

export default function Login() {
//     console.log(props)
//   function login() {
//     setTimeout(() => {
//         //페이지를 이동
//         props.history.push("/");
//     }, 1000);
//   }
  return (
    <div>
      <h2>Login 페이지입니다.</h2>
      {/* <button onClick={login}>로그인하기</button> */}
      <LoginButton />
    </div>
  );
}
