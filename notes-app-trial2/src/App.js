import React from "react";
import uuid from "react-uuid";
import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";


import './App.css';

function App() {

const [notes, setNotes] = useState([]);

const [activeNote, setActiveNote] = useState(false);


function addHandler(){
  const newNote = {
    
    key:uuid(),
    id:uuid(),
    title:"Untitled Note",
    body:"",
    lastModified: Date.now(),
  }

  setNotes([newNote,...notes]);
}

const deleteHandler = (idToDelete) => {
  setNotes((notes.filter( note => note.id !== idToDelete)));
  // console.log(notes.find( note => note.id));
}

// function changeHandler(event){
//   const mainNote = event.target.value;
//   setActiveNote([mainNote,...activeNote]);
// }

const getActiveNote = () => {
    return notes.find(({id}) => id === activeNote);
}

  return (
    <div className="App">
      <Sidebar notes={notes} addHandler={addHandler} deleteHandler={deleteHandler} activeNote={activeNote} setActiveNote={setActiveNote}/>
      <Main notetoLoad={getActiveNote()} />
    </div>
  );
}

export default App;
