import React, { useState } from "react";
import Nav from "./componets/Nav";
import Textarea from "./componets/Textarea";
import Insert from "./componets/Insert";

function App(){
  let [tempValue,handletemp] = useState({ title:"" , content:"" });

  let [finalValue,handlevalue] = useState([]);

  function hadlechange(evt){
      let inputdata = evt.target.value;
      let name = evt.target.name;

      handletemp(prev=>{
          if(name == "title"){
              return {
                  ...prev,
                  title:inputdata
              }
          }else if(name == "content"){
              return {
                  ...prev,
                  content:inputdata
              }
          }
      })
  };


function adding(){
  handlevalue(prev=>{
    //used spread operator to hold the prev values of an array
    return [...prev,
    tempValue]
  })
  handletemp("");
};
function deleteitem(id){
   handlevalue((prev)=>{
    return prev.filter((x,index)=>{
           return id !== index;    
    })
  })
}
  return ( <div>
       <Nav />
       <div className="inputarea">
       <Insert hadlechange={hadlechange} adding={adding} />
       </div>
       <div className="container">
         {finalValue.map((x,index)=>{
           return <Textarea key={index} id={index} title={x.title} content={x.content} deleteitem={deleteitem}/>
         })}
       </div>
    </div>)
};

export default App;