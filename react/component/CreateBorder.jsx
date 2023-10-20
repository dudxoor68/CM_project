import React, { useState } from "react";
import CreateTitle from "./CreateTitle";
import CreateUsing from "./CreateUsing";

function CreateBorder(props) {
  const [isShow, setIsShow] = useState("hidden");
  const [isUsing, setIsUsing] = useState("notUsing");
  const [isStyle, setIsStyle] = useState("select_border_style");
  const [isStyleValue, setIsStyleValue] = useState("solid");
  const [isBorderRadius, setIsBorderRadius] = useState(4);
  const [isBorderWidth, setIsBorderWidth] = useState(0);


  let border_radius = isBorderRadius;
  let border_width = isBorderWidth;
  let border_style = isStyleValue


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

  const handleStyle = () => {
    if(isStyle === "select_border_style"){
      setIsStyle("select_border_style selected")
    }else if(isStyle === "select_border_style selected"){
      setIsStyle("select_border_style")
    }
  }

  const handleStyleValue = (event) => {
    // li태그의 value는 숫자만 되기에 숫자를 문자로 변환시켜야함
      switch (event.target.value){
        case 0: border_style = "none"; break;
        case 1: border_style = "hidden"; break;
        case 2: border_style = "dotted"; break;
        case 3: border_style = "dashed"; break;
        case 4: border_style = "solid"; break;
        case 5: border_style = "double"; break;
        case 6: border_style = "groove"; break;
        case 7: border_style = "ridge"; break;
        case 8: border_style = "inset"; break;
        case 9: border_style = "outset"; break;
        case 10: border_style = "initial"; break;
        case 11: border_style = "inherit"; break;
        default: border_style = "solid";
      }
      setIsStyleValue(border_style);
    props.onBorder({border_style,border_radius,border_width});
  }

  const handleRadius = (event) => {
    border_radius = event.target.value;
    setIsBorderRadius(border_radius);
    props.onBorder({border_style,border_radius,border_width});
  }

  const handleWidth = (event) => {
    border_width = event.target.value;
    setIsBorderWidth(border_width);
    props.onBorder({border_style,border_radius,border_width});
  }


  return (
    <div className="create_border">
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

          <div>
            <p>Style</p>
            <div className={isStyle} onClick={handleStyle}>
              <div className="selected_border_style">
                <div className="selected_border_style_value">{isStyleValue}</div>
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.000000pt"
                    height="16.000000pt"
                    viewBox="0 0 16.000000 16.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                  <g
                      transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
                      fill="#000000"
                      stroke="none"
                  >
                    <path
                        d="M54 118 l-19 -23 23 19 c22 19 22 19 45 0 l22 -19 -19 23 c-11 12
                                          -22 22 -26 22 -4 0 -15 -10 -26 -22z"
                    />
                    <path
                        d="M58 40 l22 -24 23 24 22 24 -22 -18 c-22 -19 -24 -19 -45 0 l-23 18
                                          23 -24z"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <ul onClick={handleStyleValue}>
                  <li value="0">none</li>
                  <li value="1">hidden</li>
                  <li value="2">dotted</li>
                  <li value="3">dashed</li>
                  <li value="4">solid</li>
                  <li value="5">double</li>
                  <li value="6">groove</li>
                  <li value="7">ridge</li>
                  <li value="8">inset</li>
                  <li value="9">outset</li>
                  <li value="10">initial</li>
                  <li value="11">inherit</li>
                </ul>
              </div>
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
