import React, {useEffect, useState} from "react";
import "../css/Main.css";
import MainView from "../component/MainView";
import MainSearch from "../component/MainSearch";
import TopButton from "../component/TopButton";
import Header from "../component/Header";
import axios from "axios";
import {Link} from "react-router-dom";

function Main() {


    const [lists, setLists] = useState([]);

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

          {lists.map((list) => (
              <Link to={`/Create?after=view&num=${list.productNum}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <MainView num={list.productNum} html={list.productHtml} css={list.productCss} title={list.productTitle} writer={list.productWriter} />
              </Link>
          ))}

      </div>
      <TopButton></TopButton>
    </div>
  );
}

export default Main;
