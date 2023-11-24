import React, {useEffect, useState} from "react";
import "../css/Main.css";
import Header from "../component/Header";
import axios from "axios";

function Login(props) {
  const [isLogin, setIsLogin] = useState("state_login");



  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogin("state_login");
  };

  const handleSignUp = () => {
    setIsLogin("state_signup");
  };

  const handleFind = () => {
    setIsLogin("state_find");
  };


  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/Login');
        console.log(response.data);
        setData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="login_backgound">
      <Header></Header>
      <div className={isLogin}>
        <div className="login_box">
          <p className="title">Log In</p>
          <form method="get" action="/api/Log">
            <div className="input_box">
              <p>ID : {data.userName}</p>
              <input type="text" name="userId"/>
            </div>
            <div className="input_box">
              <p>PASSWORD : </p>
              <input type="password" name="userPw"/>
            </div>
            <input type="submit" value="Login" />
          </form>
          <button onClick={handleSignUp}>회원가입</button>
          <button onClick={handleFind}>id/pw 찾기</button>
        </div>
        <div className="signUp_box">
          <form method="get" action="/api/Regist">
          <p className="title">Sign Up</p>
          <div className="input_box">
            <p>name : </p>
            <input name="userName" type="text" />
          </div>
          <div className="input_box">
            <p>ID : </p>
            <input name="userId" type="text" />
          </div>
          <div className="input_box">
            <p>PASSWORD: </p>
            <input name="userPw" type="password" />
          </div>
          <div className="input_box">
            <p>PASSWORD CHECK : </p>
            <input name="userPw_check" type="password" />
          </div>
          <button type="submit" >회원가입</button>
          <button onClick={handleLogin}>취소</button>
          </form>
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
