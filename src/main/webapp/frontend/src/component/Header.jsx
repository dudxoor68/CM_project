import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Header(props){

    const [user, setUser] = useState();
    const [isLog, setIsLog] = useState("not_login");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/Main/{after}/log');
                //console.log(response.data);
                setUser(response.data);
                if(!(response.data === "")){
                    setIsLog("Login");
                    if(window.location.href === "http://localhost:8080/#/create"){
                        let name = response.data.userName;
                        props.onWriter({name});
                    }
                }else{
                    setIsLog("not_login");
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    return(
    <header>
        <Link to="/Main">
            <img
                src="https://raw.githubusercontent.com/dudxoor68/CM_project/main/img/logo.png"
                alt="logo"
                className="logo"
            ></img>
        </Link>
        {isLog === "not_login" ?
        <Link to="/Login" className="login_link">
            <button className="login_button">로그인</button>
        </Link>
            :
            //링크로 보낸면 controller에서 못 받음
        <form className="login_link" action="api/Logout">
            <button className="login_button" type="submit">로그아웃</button>
        </form>
        }
        <Link to="/create" className="create_link">
            <button className="create_button">제작</button>
        </Link>
    </header>
    )
}

export default Header;