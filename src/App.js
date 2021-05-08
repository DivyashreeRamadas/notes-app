import React from "react";
import uuid from "react-uuid";
import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";


import './App.css';



function App() {

const [notes, setNotes] = useState([]);

// function addHandler(event){
//   const newNote = event.target.value;
//   setNotes([newNote,...notes]);
// }

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

// function deleteHandler(idToDeleteNote){
//   const deletedNote = notes.filter(note => { return note.id !== idToDeleteNote});
//   setNotes(deletedNote);
// }

const deleteHandler = (idToDelete) => {
  setNotes((notes.filter( note => note.id !== idToDelete)));
  // console.log(notes.find( note => note.id));
}

  return (
    <div className="App">
     <Sidebar key={notes.id} notes={notes} addHandler={addHandler} deleteHandler={deleteHandler}/>
     <Main />
    </div>
  );
}

export default App;
