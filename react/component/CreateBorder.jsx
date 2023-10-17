import React, { useState } from "react";
import CreateTitle from "./CreateTitle";
import CreateUsing from "./CreateUsing";

function CreateBorder(props) {
  const [isShow, setIsShow] = useState("hidden");
  const [isUsing, setIsUsing] = useState("notUsing");
  const [isBorderRadius, setIsBorderRadius] = useState(4);
  const [isBorderWidth, setIsBorderWidth] = useState(0);


  let border_radius = isBorderRadius;
  let border_width = isBorderWidth;


  const handleShow = () => {
    if (isShow === "hidden") {
      setIsShow("show");
    } else if (isShow === "show") {
      setIsShow("hidden");
    }
  };

  const handleUsing = () => {
    if (isUsing === "using") {
      setIsUsing("notUsing");
    } else if (isUsing === "notUsing") {
      setIsUsing("using");
    }
  };

  const handleRadius = (event) => {
    border_radius = event.target.value;
    setIsBorderRadius(border_radius);
    props.onBorder({border_radius,border_width});
  }

  const handleWidth = (event) => {
    border_width = event.target.value;
    setIsBorderWidth(border_width);
    props.onBorder({border_radius,border_width});
  }


  return (
    <div className="create_gradient">
      <div>
        <CreateTitle
          title="Border"
          using={isUsing}
          onClick={handleShow}
          onDataChange={handleShow}
        ></CreateTitle>
        <div className={isShow}>
          <CreateUsing
            using={isUsing}
            onDataChange={handleUsing}
          ></CreateUsing>
          <div className="select_border_style">
            <p>Style</p>
            <div>
              <button>ㅋㅋ</button>
              <ul>
                <li><button>none</button></li>
                <li><button>hidden</button></li>
              </ul>
            </div>
          </div>
          <div>
            <p>Border Radius</p>
            <input type="range" min="0" max="75" step="1" value={isBorderRadius} onInput={handleRadius}/>{isBorderRadius}
          </div>
          <div>
            <p>Border Width</p>
            <input type="range" min="0" max="75" step="1" value={isBorderWidth} onInput={handleWidth}/>{isBorderWidth}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBorder;
