import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

import './App.css';
import { useState } from "react";

import {uuid} from "react-uuid";

function App() {

const [notes, setNotes] = useState([]);

// function addHandler(event){
//   const newNote = event.target.value;
//   setNotes([newNote,...notes]);
// }

function addHandler(){
  const newNote = {
    id:uuid,
    title:"Untitled Note",
    body:"",
    lastModified: Date.now(),
  }

  setNotes([newNote,...notes]);
}

  return (
    <div className="App">
     <Sidebar notes={notes} addHandler={addHandler}/>
     <Main />
    </div>
  );
}

export default App;
