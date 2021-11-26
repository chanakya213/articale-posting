import React, {useState} from "react";

function Insert(props){
    return (
        <div className="inserttext">
            <h3>Title</h3>
            <input onChange={props.hadlechange} type="text" name="title" id="title" placeholder="enter your title" />
            <h3>Content</h3>
            <textarea onChange={props.hadlechange} name="content" id="content" placeholder="enter your content" />
            <button onClick={props.adding}>add</button>
        </div>
    )
};

export default Insert;