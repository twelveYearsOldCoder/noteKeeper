import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        text: ""
    });

    function submitNote(event) {
        //2. use the passed from props dunction to return the note object
        props.onAdd(note);
        setNote({
            title: "",
            text: ""
        });
        event.preventDefault();
    }

    function changeContent(event) {
        const { name, value } = event.target;
        setNote((prevValue) => {
            return {
                //spread operator 
                ...prevValue,
                //adding "[]" to a const it will insert the value of it 
                [name]: value
                
            }

        });


    }
    return (
        <div>
            <form>
                <input value={note.title} onChange={changeContent} name="title" placeholder="Title" />
                <textarea value={note.text} onChange={changeContent} name="text" placeholder="Take a note..." rows="3" />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
