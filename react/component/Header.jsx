import React from "react";
import {Link} from "react-router-dom";

function Header(props){




    return(
    <header>
        <Link to="/">
            <img
                src="https://raw.githubusercontent.com/dudxoor68/CM_project/main/img/logo.png"
                alt="logo"
                className="logo"
            ></img>
        </Link>
        <Link to="/Login" className="login_link">
            <button className="login_button">로그인</button>
        </Link>
        <Link to="/create" className="create_link">
            <button className="create_button">제작</button>
        </Link>
    </header>
    )
}

export default Header;