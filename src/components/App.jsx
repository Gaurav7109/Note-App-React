import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, setNotes] = useState([]);

  function addNote(currNote) {
    setNotes((prevItems) => {
      return [...prevItems, currNote];
    });
  }
  function deleteTheNote(id) {
    const confirmed = window.confirm("Are you sure, you want to delete?");
    if (confirmed === true)
      setNotes((prevItems) => {
        return prevItems.filter(function (Notes, index) {
          return index !== id;
        });
      });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {Notes.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            id={index}
            key={index}
            deleteNote={deleteTheNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
