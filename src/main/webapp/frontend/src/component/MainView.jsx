import React from "react";

function MainView(props) {



  return (
    <div>
      <div className="viewBlock">
        <div className="exe"></div>
      </div>
      <p className="viewTitle">{props.title}</p>
      <p className="viewWriter">{props.writer}</p>
    </div>
  );
}

export default MainView;
