import React from "react";
import {HashRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import Create from "./page/Create";
import MyPage from "./page/MyPage";

function PageNotFound(props) {
    console.log(props);
    return (
        <div role='alert'>
            <h2>페이지를 찾을 수가 없습니다</h2>
            <Link to='/Main'>홈 페이지</Link>를 이용하여 네비게이션 하세요
        </div>
    );
}


function App(props){
    return(

    <Router>
        <Routes>
            <Route path="/Main" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Mypage" element={<MyPage />} />
            <Route path='page-not-found' element={<PageNotFound />} />
            <Route path='*' element={<Navigate to='page-not-found' replace={true} />} />
        </Routes>
    </Router>
    );
}

export default App;