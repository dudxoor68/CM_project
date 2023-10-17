import React, { useState } from "react";

function CreateTitle(props) {
  const [isShow, setIsShow] = useState("hidden");
  const [isImg, setIsImg] = useState("down_arrow");

  const handleShow = (event) => {
    if (isShow === "hidden") {
      setIsShow("show");
      setIsImg("up_arrow");
    } else if (isShow === "show") {
      setIsShow("hidden");
      setIsImg("down_arrow");
    }
    props.onDataChange(event.target.value);
  };

  return (
    <div className="create_title" onClick={handleShow}>
      <span>{props.title}</span>
      {props.using === "using" && <div className="state_using"></div>}
      <img
        className={isImg}
        src="https://raw.githubusercontent.com/dudxoor68/CM_project/main/img/down-arrow.svg"
        alt="arrow"
      />
    </div>
  );
}

export default CreateTitle;
