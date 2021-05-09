import React from "react";

function Main({notetoLoad}){
    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" autoFocus value={notetoLoad.title} />
            <textarea name="body" placeholder="Write your text here" value={notetoLoad.body} ></textarea>
        </div>
           
        <div className="app-main-note-preview">
        <h1 className="preview-title">{notetoLoad.title}</h1>
        <div className="markdown-preview"> {notetoLoad.body}</div>
            
        </div>
    </div>
}

export default Main;