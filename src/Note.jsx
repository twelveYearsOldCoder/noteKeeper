import React from "react";
function Note(props) {
    function hadnleDelete(){
        props.onDelete(props.id);
    }
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={hadnleDelete}> Delete </button>
    </div>;
}
export default Note;