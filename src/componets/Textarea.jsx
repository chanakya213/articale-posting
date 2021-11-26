import React from "react";

function Textarea(props){
    return (
        <div className="textarea">
              <h3>{props.title}</h3>
              <p>{props.content}</p>
              <a href="#" onClick={ ()=>{
                   props.deleteitem(props.id)
              }}>del</a>
        </div>
    )
};

export default Textarea;