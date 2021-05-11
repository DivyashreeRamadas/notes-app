import React from "react";
import ReactMarkdown from "react-markdown";

function Main({activeNote, onUpdateNote}){

    function onEditField(key, value){
        onUpdateNote({
            // id: activeNote.id,
            ...activeNote,
            [key] : value,
            lastModified: Date.now(),
        })
    }

    

    if(!activeNote) return <div className="no-active-note"> No note selected</div>

    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" name="main-title" autoFocus value={activeNote.title} 
            onChange={(event) => onEditField("title", event.target.value)}/>
            
            <textarea name="main-body" placeholder="Write your text here" value={activeNote.body}  
            onChange={(event) => onEditField("body", event.target.value)}></textarea>

            {/* <input type="text" id="title" name="main-title" autoFocus value={activeNote.title} 
            onChange={changeHandler}/>
            
            <textarea name="main-body" placeholder="Write your text here" value={activeNote.body}  
            onChange={changeHandler}></textarea> */}
        </div>
           
        <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
            
        </div>
    </div>
}

export default Main;
