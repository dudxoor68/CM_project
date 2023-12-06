import React, {useEffect} from "react";

function MainView(props) {

    let cla = "exe "+props.num;
    let html = props.html;
    let css = props.css;

    useEffect(()=> {
        document.querySelector(".exe").innerHTML = html;
        document.querySelector(".exe").innerHTML += "<style> .exe" + props.num + " " + css + "</style>";

    },[])

  return (
    <div>
      <div className="viewBlock">
        <div className={cla}></div>
      </div>
      <p className="viewTitle">{props.title}</p>
      <p className="viewWriter">{props.writer}</p>
    </div>
  );
}

export default MainView;
