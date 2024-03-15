import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({ title:"", content:""});

  function handleTextChange(event) {
    const { value, name } = event.target;
    setNote((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      }
    });
  }

  function submitNote(event) {
    props.onAdd(note)
    event.preventDefault();
    setNote({ title:"", content:""});
  }

  return (
    <div>
      <form>
        <input onChange={handleTextChange} name="title" placeholder="Title" maxLength="100" value={note.title}/>
        <textarea onChange={handleTextChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
