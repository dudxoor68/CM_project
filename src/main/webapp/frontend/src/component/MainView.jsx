import React from "react";

function MainView(props) {
  return (
    <div>
      <div className="viewBlock">
        <img alt="contentsImg"></img>
      </div>
      <p className="viewTitle">{props.title}</p>
      <p className="viewWriter">{props.writer}</p>
    </div>
  );
}

export default MainView;
