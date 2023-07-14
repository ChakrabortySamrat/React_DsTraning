import React from "react";
import ReactDOM from "react-dom";

const mydv1=<div>This is a test div</div> //single line jsx
const MYdv1 = (  
  <>
    <div>div1</div>
    <div>div2</div>  
  </>
);  // jsx with react fragmnet to write multiple line html code

const MYdv2 = () => {
    return (
    <>
      <div>div1</div>
      <div>div2</div>
    </>
    )
    }; //functional component
  

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(MYdv1);   // To render simple Jsx
root.render(<MYdv2/>); // To render functional component 
