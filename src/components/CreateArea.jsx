import React, { useState } from "react";

function CreateArea(input) {
  const [currNote, setCurrNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    setCurrNote((prevValue) => {
      return {
        ...prevValue,
        [inputName]: newValue
      };
    });
  }

  function submitNote(event) {
    input.onAdd(currNote);
    event.preventDefault();
    setCurrNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={currNote.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={currNote.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
