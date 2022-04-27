import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";




//print every component to show in the browser
function App() {
    //create an array to populate with data
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        //3. at the point the app has acces to the returned object from the CreateArea.jsx
        setNotes(prevValue => {
            console.log(newNote);
            return [...prevValue, newNote];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                //return every note that the index does not match the id
                return index !== id;
            })
        })

    }

    return (
        <div>
            <Header />
            <CreateArea
                //1. pass as a prop the function addNote
                onAdd={addNote} />

            {notes.map((noteItem, index) => {
                return <Note
                key={index}
                id={index}
                title={noteItem.title}
                    content={noteItem.text}
                    onDelete={deleteNote} />;
            })}
            < Footer />
        </div>
    );
}
export default App;