import React, {useEffect, useState} from "react";
import "../css/Main.css";
import Header from "../component/Header";
import axios from "axios";
import {useLocation} from "react-router";

function Login(props) {
  const [isLogin, setIsLogin] = useState("state_login");

  const location = useLocation();
  const afterParam = new URLSearchParams(location.search).get('after');



  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/Login/{after}/find');
        setData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    if (afterParam === "regist"){           //회원가입 완료시
      alert("회원가입 완료!");
    }else if(afterParam === "registNo"){     // 비밀번호체크 실패시
      alert("비밀번호가 다릅니다.");
    }else if(afterParam === "logNo"){
      alert("아이디 또는 비밀번호가 다릅니다.");
    }else if(afterParam === "find"){
     // alert("id : "+data.userId +"\n" + "pw : " + data.userPw);
    }
  },[]);

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




  return (
    <div className="login_backgound">
      <Header></Header>
      <div className={isLogin}>
        <div className="login_box">
          <p className="title">Log In</p>
          <form method="get" action="/api/Log">
            <div className="input_box">
              <p>ID :</p>
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
          <form method="get" action="api/find">
          <p className="title">Find ID/PW</p>
            <div className="input_box">
              <p>name: </p>
              <input name="userName" type="text" />
            </div>
          <button type="submit">찾기</button>
          <button onClick={handleLogin}>취소</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
