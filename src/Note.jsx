import React from "react";
function Note(props){
    return <note className="note"><div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    </div></note>;
}
export default Note;