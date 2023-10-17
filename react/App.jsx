import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import Create from "./page/Create";
import MyPage from "./page/MyPage";


function App(props){
    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Mypage" element={<MyPage />} />
        </Routes>
    </Router>
    );
}

export default App;