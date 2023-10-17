import React, {useEffect, useState} from "react";

function CreateUsing(props){

    const [isUsing,setIsUsing] = useState(props.using);
    const [isChecked, setIsChecked] = useState(props.using === "notUsing" ? "" : "checked");


    const handleUsing = () => {
        if(props.using === "using"){
            setIsUsing("notUsing");
            setIsChecked("");
        }else if(props.using === "notUsing"){
            setIsUsing("using");
            setIsChecked("checked");
        }

        props.onDataChange(isUsing);
    }

    useEffect(() => {
        if(props.using ==="using"){
            setIsUsing("using");
            setIsChecked("checked");
        }else if(props.using ==="notUsing"){
            setIsUsing("notUsing");
            setIsChecked("");
        }
    },[props.using]);

    return(
        <div className="custom_box">
            {props.using === "notUsing" ? <p className="show_p">Enable Parameter</p> : <p className="show_p">Disable Parameter</p>}
                <input type="checkbox" checked={isChecked}/>
                <div className="checkBall" onClick={handleUsing}></div>
        </div>
    )
}

export default CreateUsing;