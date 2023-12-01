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

  const [colorR,setColorR] = useState(100);
  const [colorG,setColorG] = useState(100);
  const [colorB,setColorB] = useState(100);
  const [colorA,setColorA] = useState(1);
  const [isColor,setIsColor]= useState("#"+convertColor(colorR)+convertColor(colorG)+convertColor(colorB));


  let border_radius = isBorderRadius;
  let border_width = isBorderWidth;
  let border_style = isStyleValue;

  /* useState상태로 상위 컴포넌트로 넘기면 늦게 적용되므로 변수로 넘긴다. */
  let color_r = colorR;
  let color_g = colorG;
  let color_b = colorB;
  let color_a = colorA;
  let using = isUsing;


  const handleShow = () => {
    if (isShow === "hidden") {
      setIsShow("show");
    } else if (isShow === "show") {
      setIsShow("hidden");
    }
  };

  const handleUsing = () => {
    if (isUsing === "using") {
      using = "notUsing";
    } else if (isUsing === "notUsing") {
      using = "using";
    }
    setIsUsing(using);
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
  };

  const handleStyle = () => {
    if (isUsing === "notUsing") {
      using="using";
    }
    setIsUsing("using");

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
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
  }

  const handleRadius = (event) => {
    if (isUsing === "notUsing") {
      using="using";
    }
    setIsUsing("using");

    border_radius = event.target.value;
    setIsBorderRadius(border_radius);
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
  }

  const handleWidth = (event) => {
    if (isUsing === "notUsing") {
      using="using";
    }
    setIsUsing("using");

    border_width = event.target.value;
    setIsBorderWidth(border_width);
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
  }


  /* 10진수를 16진수로 바꿔주는 함수 ex) 10 -> a */
  function convertColor(color){
    let readyColor = parseInt(color,10); //10진수로 바꾸고
    let converted_color = readyColor.toString(16); //16진수로 바꿈

    return converted_color.length === 1 ? "0" + converted_color : converted_color;
  }

  const handleColorR = (event) => {
    if (isUsing === "notUsing") {
      using="using";
    }
    setIsUsing("using");


    color_r = event.target.value;
    if(color_r < 0 ){
      color_r = 0;
    }else if(color_r > 255){
      color_r = 255;
    }
    setColorR(color_r);
    setIsColor("#"+convertColor(color_r)+convertColor(color_g)+convertColor(color_b));
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
  }
  const handleColorG = (event) => {
    if (isUsing === "notUsing") {
      using="using";
    }
    setIsUsing("using");


    color_g = event.target.value;
    if(color_g < 0 ){
      color_g = 0;
    }else if(color_g > 255){
      color_g = 255;
    }
    setColorG(color_g);
    setIsColor("#"+convertColor(color_r)+convertColor(color_g)+convertColor(color_b));
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
  }
  const handleColorB = (event) => {
    if (isUsing === "notUsing") {
      using="using";
    }
    setIsUsing("using");


    color_b = event.target.value;
    if(color_b < 0 ){
      color_b = 0;
    }else if(color_b > 255){
      color_b = 255;
    }
    setColorB(color_b);
    setIsColor("#"+convertColor(color_r)+convertColor(color_g)+convertColor(color_b));
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
  }
  const handleColorA = (event) => {
    if (isUsing === "notUsing") {
      using="using";
    }
    setIsUsing("using");


    let color_a = event.target.value;
    if (color_a > 1){
      color_a = 1;
    }
    setColorA(color_a);
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
  }

  const handleColorAll = (event) => {
    if (isUsing === "notUsing") {
      using="using";
    }
    setIsUsing("using");


    let color = event.target.value;       //16진수로 나옴
    let color_r = parseInt(color.substring(1,3),16);     //16진수를 10진수로 표현
    let color_g = parseInt(color.substring(3,5),16);
    let color_b = parseInt(color.substring(5,7),16);

    setColorR(color_r);
    setColorG(color_g);
    setColorB(color_b);
    setIsColor(color);

    /* 상위컴포넌트(Create.jsx)로 값 보내기 */
    props.onBorder({border_style,border_radius,border_width,color_r,color_g,color_b,color_a,using});
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
                  <li value="3">dashed/asdsadsa</li>
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

          <div className="create_color select">
            <div className="create_color c">
              Color<input type="color" className="create_color_show" value={isColor} onChange={handleColorAll}/>
            </div>
            <div className="create_color r">
              R<input type="text" value={colorR} onInput={handleColorR} placeholder="type..."/>
            </div>
            <div className="create_color b">
              G<input type="text" value={colorG} onInput={handleColorG} placeholder="type..."/>
            </div>
            <div className="create_color g">
              B<input type="text" value={colorB} onInput={handleColorB} placeholder="type..."/>
            </div>
            <div className="create_color a">
              A<input type="text" value={colorA} onInput={handleColorA} placeholder="type..."/>
              <input type="range" min="0" max ="1" step="0.01" value={colorA} onInput={handleColorA}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreateBorder;
