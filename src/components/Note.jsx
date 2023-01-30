import React from "react";

function Note(input) {
  return (
    <div className="note">
      <h1>{input.title}</h1>
      <p>{input.content}</p>
      <button
        onClick={() => {
          input.deleteNote(input.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
