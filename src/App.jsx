import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "./notes";

function showNotes(note){
  return  <Note 
        key ={note.id}
        title= {note.title}
        content={note.content}
    />

}
function App(){
    return <div>

        <Header />
        {notes.map(showNotes)}
        <Footer />
    </div>
}
export default App;