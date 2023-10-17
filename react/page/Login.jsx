import React, {useState} from "react";
import "../css/Main.css";
import Header from "../component/Header";

function Login(props) {
  const [isLogin, setIsLogin] = useState("state_login");



  const handleLogin = () => {
    setIsLogin("state_login");
  };

  const handleSignUp = () => {
    setIsLogin("state_signup");
  };

  const handleFind = () => {
    setIsLogin("state_find");
  };

  return (
    <div className="login_backgound">
      <Header></Header>
      <div className={isLogin}>
        <div className="login_box">
          <p className="title">Log In</p>
          <form method="get">
            <div className="input_box">
              <p>ID : </p>
              <input type="text" name="id"/>
            </div>
            <div className="input_box">
              <p>PASSWORD : </p>
              <input type="password" name="pw"/>
            </div>
            <input type="submit" value="Login" />
          </form>
          <button onClick={handleSignUp}>회원가입</button>
          <button onClick={handleFind}>id/pw 찾기</button>
        </div>
        <div className="signUp_box">
          <p className="title">Sign Up</p>
          <div className="input_box">
            <p>ID : </p>
            <input type="text" />
          </div>
          <div className="input_box">
            <p>PASSWORD : </p>
            <input type="password" />
          </div>
          <div className="input_box">
            <p>PASSWORD CHECK: </p>
            <input type="password" />
          </div>
          <div className="input_box">
            <p>name : </p>
            <input type="text" />
          </div>
          <button type="submit">회원가입</button>
          <button onClick={handleLogin}>취소</button>
        </div>
        <div className="find_box">
          <p className="title">Find ID/PW</p>
          <button>찾기</button>
          <button onClick={handleLogin}>취소</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
