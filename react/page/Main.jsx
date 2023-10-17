import React from "react";
import "../css/Main.css";
import MainView from "../component/MainView";
import MainSearch from "../component/MainSearch";
import TopButton from "../component/TopButton";
import Header from "../component/Header";


function Main() {

  return (
    <div>
        <Header></Header>
        <MainSearch></MainSearch>
      <div className="sort">
        <p>정렬</p>
        <select>
          <option>최신순</option>
          <option>평가순</option>
          <option>조회순</option>
        </select>
      </div>
      <div className="view_box">
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
        <MainView></MainView>
      </div>
      <TopButton></TopButton>
    </div>
  );
}

export default Main;
