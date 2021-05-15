import React, { useEffect } from "react";
import uuid from "react-uuid";
import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";


import './App.css';

function App() {

// const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
const [notes, setNotes] = useState([]);

const [activeNote, setActiveNote] = useState(false);

// useEffect(() => {
//   localStorage.setItem("notes", JSON.stringify(notes))
// }, [notes]);

// const [mainArea, setMainArea] = useState({
//   id:"",
//   title:"",
//   body:"",
// });

// const [mainActiveNote, setMainActiveNote] = useState(false);
// mainArea.id = activeNote;


function addHandler(){
  const newNote = {
    
    id:uuid(),
    title:"Untitled Note",
    body:"",
    lastModified: Date.now(),
  }

  setNotes([newNote,...notes]);
  
}

const deleteHandler = (idToDelete) => {
  setNotes(notes.filter( (note) => note.id !== idToDelete));
  // console.log(notes.find( note => note.id));
}


const getActiveNote = () => {
  return notes.find((note) => note.id === activeNote);
};

// function changeHandler(event){
     
//     const inputValue = event.target.value;
//     const inputName = event.target.name;
  
//   setMainArea( (prevValue) => {
//     if(inputName === "main-title"){
//       return {
//         title: inputValue,
//         body: prevValue.body
//       }
//     }else if(inputName === "main-body"){
//       return {
//         title: prevValue.title,
//         body: inputValue
//       }
//     }
//   }) 
// }

const onUpdateNote = (updatedNote) => {
  const notesArray = notes.map((note) => {
    if(note.id === activeNote){
      return updatedNote;
    }

    return note;
  })
  setNotes(notesArray);
}



  return (
    <div className="App">
      <Sidebar key={notes.id} notes={notes} addHandler={addHandler} deleteHandler={deleteHandler} activeNote={activeNote} 
      setActiveNote={setActiveNote} />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />

      {/* <Main activeNote={getActiveNote()}/> */}
    </div>
  );
}

export default App;
