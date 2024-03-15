import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {

  const [note, setNote] = useState({ title:"", content:""});
  const [isExpanded, setIsExpanded] =useState(false);

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

  function expand(){
    setIsExpanded(true);
  }

  return (
    <div >
      <form className="create-note">
        {isExpanded && <input onChange={handleTextChange} name="title" placeholder="Title" maxLength="100" value={note.title}/>}
        <textarea onChange={handleTextChange} onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3:1 } value={note.content}/>
        <Zoom in={isExpanded}>
         <Fab onClick={submitNote} > <AddIcon/> </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
