import React from "react";

function Sidebar({notes, addHandler, deleteHandler, activeNote, setActiveNote}){


    const sortedArray = notes.sort( (a,b) => b.lastModified - a.lastModified );

    return <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1> 
                <button onClick={addHandler}> Add </button>
            </div>
            
            <div className="app-sidebar-notes">
                {sortedArray.map((note) => (
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick = {() => setActiveNote(note.id)}>

                    <div className="sidebar-note-title">
                    
                    {/* <strong name="side-title">{(mainArea.id === activeNote.id ) ? mainArea.title : note.title}</strong>
                    <button onClick={() => deleteHandler(note.id)}>Delete</button>
                    </div>
                    <p name="side-body">{mainArea.id === activeNote.id ? (mainArea.body.substr(0, 100) + "...") : (note.body && note.body.substr(0 , 100) + "...")}</p> */}

                    <strong name="side-title">{note.title}</strong>
                    <button onClick={() => deleteHandler(note.id)}>Delete</button>
                    </div>
                    <p name="side-body">{note.body && note.body.substr(0 , 100) + "..."}</p>

                    <small className="note-meta">
                    Last modified: {new Date(note.lastModified).toLocaleDateString("en-IN",{
                        hour:"2-digit", minute:"2-digit"
                    })} </small>
                </div>
                ))}
                

                
        
            </div>
            </div>
}

export default Sidebar;
