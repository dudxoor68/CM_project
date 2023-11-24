import React, {useState} from "react";
import "../css/Main.css";
import Header from "../component/Header";
import CreateRgba from "../component/CreateRgba";
import CreateBorder from "../component/CreateBorder";


function Create(props) {
  const [isView, setIsView] = useState("selected_html");




  const handleToHtml = () => {
    setIsView("selected_html");
  };
  const handleToCss = () => {
    setIsView("selected_css");
  };

  function updateHtmlCode() {
    let htmlCode = document.querySelector(".input_html").value;
    let cssCode = document.querySelector(".input_css").value;
    document.querySelector(".execution").innerHTML = htmlCode;
    document.querySelector(".execution").innerHTML += "<style> .execution " + cssCode + "</style>";
  }

  function updateCssCode() {
    let htmlCode = document.querySelector(".input_html").value;
    let cssCode = document.querySelector(".input_css").value;
    document.querySelector(".execution").innerHTML = htmlCode;
    document.querySelector(".execution").innerHTML += "<style> .execution " + cssCode + "</style>";
  }
  //아직 css는 하나의 태그만 적용해야 정상작동

  const copyInputToClipboard = () => {
    let copyInput;
    if(isView === "selected_html") {
      copyInput = document.getElementById("input_html");
    }else if (isView === "selected_css") {
      copyInput = document.getElementById("input_css");
    }
    copyInput.select();
    document.execCommand("copy");
    copyInput.setSelectionRange(0, 0);
  };

  const saveCode = () => {
    const save_html_code = document.querySelector(".input_html").value;
    const save_css_code = document.querySelector(".input_css").value;

    console.log(save_html_code);
    console.log(save_css_code);

  }


  var rUsing = 0;       //사용중인지 여부(0= 사용안함, 1=사용중)
  var bUsing = 0;
  var rgbaUse= false;     //처음 사용하는지 다시 사용하는지 (false = 처음사용, true = 다시사용)
  var tempRgba;
  var r;
  var borderUse = false;
  var tempBorder;
  var b;



  const handleRgba = (event) => {
    if(event.using === "using"){
      rUsing = 1;
      if(rUsing + bUsing === 1 ){    //하나 사용하고 있을 때
        if(rgbaUse === false){
          rgbaUse=true;
          document.querySelector(".input_css").value = ".className{ \n\t"+event.property+": rgba("+event.color_r+","+event.color_g+","+event.color_b+","+event.color_a+");\n }";
          tempRgba = "\t"+event.property+": rgba("+event.color_r+","+event.color_g+","+event.color_b+","+event.color_a+");";
        }else if(rgbaUse === true){
          document.querySelector(".input_css").value = ".className{ \n\t"+event.property+": rgba("+event.color_r+","+event.color_g+","+event.color_b+","+event.color_a+");\n }";
        }
      }else if(rgbaUse === false){      //여러개 사용하고 있을 때 처음 사용
        rgbaUse=true;
        tempRgba = "\t"+event.property+": rgba("+event.color_r+","+event.color_g+","+event.color_b+","+event.color_a+");\n}";
        document.querySelector(".input_css").value = document.querySelector(".input_css").value.substring(0,document.querySelector(".input_css").value.length-1)+tempRgba;
        tempRgba = "\t"+event.property+": rgba("+event.color_r+","+event.color_g+","+event.color_b+","+event.color_a+");";
      }else if(rgbaUse === true){       //여러개 사용하고 있을 때 다시 사용
        r = "\t"+event.property+": rgba("+event.color_r+","+event.color_g+","+event.color_b+","+event.color_a+");";
        document.querySelector(".input_css").value = document.querySelector(".input_css").value.replace(tempRgba,r);
        tempRgba = r;
      }
    }else if(event.using === "notUsing"){
      rUsing = 0;
      rgbaUse=false;
      if(rUsing + bUsing === 0 ){
        document.querySelector(".input_css").value="";
      }else{
        document.querySelector(".input_css").value = document.querySelector(".input_css").value.replace(tempRgba+"\n","");
      }
    }
    // console.log("rUsing: "+rUsing);
    // console.log("bUsing: "+bUsing);
    // console.log("rgbaUse: "+rgbaUse);
    // console.log("tempRgba: "+tempRgba);
    // console.log("r: "+r);
    // console.log("borderUse: "+borderUse);
    // console.log("tempBorder: "+tempBorder);
    // console.log("b: "+b);
    // console.log("------------------------");
    updateCssCode();
  }

  const handleBorder = (event) => {
    if(event.using ==="using"){
      bUsing = 1;
      if(rUsing + bUsing === 1){    //하나 사용하고 있을 때
        if(borderUse===false){
          borderUse=true;
          document.querySelector(".input_css").value = ".className{ \n\tborder: " + event.border_width +"px " + event.border_style + " rgba(" + event.color_r + "," + event.color_g + "," + event.color_b + "," + event.color_a + "); \n\tborder-radius: " + event.border_radius + "px;\n}" ;
          tempBorder = "\tborder: " + event.border_width +"px " + event.border_style + " rgba(" + event.color_r + "," + event.color_g + "," + event.color_b + "," + event.color_a + "); \n\tborder-radius: " + event.border_radius + "px;";
        }else if(borderUse===true){
          document.querySelector(".input_css").value = ".className{ \n\tborder: " + event.border_width +"px " + event.border_style + " rgba(" + event.color_r + "," + event.color_g + "," + event.color_b + "," + event.color_a + "); \n\tborder-radius: " + event.border_radius + "px;\n}" ;
        }

      }else if(borderUse === false){      //여러개 사용하고 있을 때 처음 사용
        borderUse=true;
        tempBorder = "\tborder: " + event.border_width +"px " + event.border_style + " rgba(" + event.color_r + "," + event.color_g + "," + event.color_b + "," + event.color_a + "); \n\tborder-radius: " + event.border_radius + "px;\n}";
        document.querySelector(".input_css").value = document.querySelector(".input_css").value.substring(0,document.querySelector(".input_css").value.length-1)+tempBorder;
        tempBorder = "\tborder: " + event.border_width +"px " + event.border_style + " rgba(" + event.color_r + "," + event.color_g + "," + event.color_b + "," + event.color_a + "); \n\tborder-radius: " + event.border_radius + "px;";
      }else if(borderUse === true){       //여러개 사용하고 있을 때 다시 사용
        b = "\tborder: " + event.border_width +"px " + event.border_style + " rgba(" + event.color_r + "," + event.color_g + "," + event.color_b + "," + event.color_a + "); \n\tborder-radius: " + event.border_radius + "px;";
        document.querySelector(".input_css").value = document.querySelector(".input_css").value.replace(tempBorder,b);
        tempBorder = b;
      }

    }else if(event.using === "notUsing"){
      bUsing = 0;
      borderUse = false;
      if(rUsing + bUsing === 0 ){
        document.querySelector(".input_css").value="";
      }else{
        document.querySelector(".input_css").value = document.querySelector(".input_css").value.replace(tempBorder+"\n","");
      }

    }
    // console.log("rUsing: "+rUsing);
    // console.log("bUsing: "+bUsing);
    // console.log("rgbaUse: "+rgbaUse);
    // console.log("tempRgba: "+tempRgba);
    // console.log("r: "+r);
    // console.log("borderUse: "+borderUse);
    // console.log("tempBorder: "+tempBorder);
    // console.log("b: "+b);
    // console.log("------------------------");
    updateCssCode();
  }

  return (
    <div>
      <Header></Header>
      <div className="create_view">
        <div className="example">
          <CreateRgba onColor={handleRgba}></CreateRgba>
          <CreateBorder onBorder={handleBorder}></CreateBorder>
        </div>
        <div className="execution"></div>
        <div className="select_input_view">
          <div className="select_input selected_html" onClick={handleToHtml}>
            HTML
          </div>
          <div className="select_input selected_css" onClick={handleToCss}>
            CSS
          </div>
        </div>
        <div className="input_view">
          <div className={isView}>
            <button className="copyButton" onClick={copyInputToClipboard}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="24.000000pt"
                height="24.000000pt"
                viewBox="0 0 24.000000 24.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M20 135 c0 -87 3 -105 15 -105 8 0 15 -7 15 -15 0 -12 14 -15 63 -15
                      53 0 67 4 85 23 19 20 22 35 22 105 0 66 -3 82 -15 82 -8 0 -15 7 -15 15 0 12
                      -16 15 -85 15 l-85 0 0 -105z m160 85 c0 -5 -28 -10 -62 -12 l-63 -3 -3 -82
                      c-4 -115 -22 -105 -22 12 l0 95 75 0 c41 0 75 -4 75 -10z m30 -91 c0 -70 -11
                      -109 -31 -109 -6 0 -8 7 -5 16 3 8 2 12 -4 9 -6 -3 -10 -13 -10 -21 0 -10 -13
                      -14 -50 -14 l-50 0 0 95 0 95 75 0 75 0 0 -71z"
                  />
                  <path d="M113 163 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z" />
                  <path d="M113 133 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z" />
                  <path d="M113 103 c15 -2 37 -2 50 0 12 2 0 4 -28 4 -27 0 -38 -2 -22 -4z" />
                  <path d="M103 73 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
                </g>
              </svg>
            </button>
            <button className="saveButton" onClick={saveCode}>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                   width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                   preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                  <path d="M10 120 l0 -110 110 0 110 0 0 88 c0 80 -2 91 -23 110 -20 19 -35 22
                      -110 22 l-87 0 0 -110z m64 70 c5 -27 9 -30 46 -30 37 0 41 3 47 30 l6 31 23
                      -22 c21 -20 24 -32 24 -95 0 -40 -5 -76 -10 -79 -5 -3 -10 3 -10 15 0 47 -17
                      60 -80 60 -63 0 -80 -13 -80 -60 0 -12 -4 -18 -10 -15 -11 7 -14 178 -3 188
                      17 17 41 5 47 -23z m76 5 c0 -21 -5 -25 -30 -25 -25 0 -30 4 -30 25 0 21 5 25
                      30 25 25 0 30 -4 30 -25z m30 -145 l0 -30 -60 0 -60 0 0 30 0 30 60 0 60 0 0
                      -30z"/>
                </g>
              </svg>

            </button>
            <div className="input_wrapper_html">
              <textarea
                className="input_html"
                id="input_html"
                placeholder="WRITE OR PASTE HTML CODE"
                onInput={updateHtmlCode}
                spellCheck="false"
              />
            </div>
            <div className="input_wrapper_css">
              <textarea
                className="input_css"
                id="input_css"
                placeholder="WRITE OR PASTE CSS CODE
                 <PLEASE USE ID OR CLASSNAME PREFERABLY>"
                onInput={updateCssCode}
                spellCheck="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
