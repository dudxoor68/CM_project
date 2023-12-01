import React, {useEffect, useState} from "react";
import "../css/Main.css";
import MainView from "../component/MainView";
import MainSearch from "../component/MainSearch";
import TopButton from "../component/TopButton";
import Header from "../component/Header";
import axios from "axios";

function Main() {


    const [lists, setLists] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/Main');
                console.log(response.data);
                setLists(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);




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


        <MainView title={"b"} writer={"ss"}></MainView>
        <MainView title={"c"} writer={"dd"}></MainView>
        <MainView title={"d"} writer={"vv"}></MainView>
        <MainView title={"e"} writer={"gg"}></MainView>
        <MainView title={"title"} writer={"writer"}></MainView>



          {/*{lists.map((item) => (*/}
          {/*    <MainView title={item.productTitle} writer={item.productWriter} key = {item.productNum}     />*/}
          {/*))}*/}

          {/*{list.map((mainView, i) => (*/}
          {/*<div>*/}
          {/*    <div className="viewBlock">*/}
          {/*        <img alt="contentsImg"></img>*/}
          {/*    </div>*/}
          {/*    <p className="viewTitle">{props.title}</p>*/}
          {/*    <p className="viewWriter">{props.writer}</p>*/}
          {/*</div>*/}
          {/*))}*/}
      </div>
      <TopButton></TopButton>
    </div>
  );
}

export default Main;
