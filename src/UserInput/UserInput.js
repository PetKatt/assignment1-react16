import React from "react";

const userInput = (props) => {
  const style = {
    color: "red", 
    border: "2px solid red", 
    marginTop: "100px",
    padding: "5px"
  };

  return(
    <div>
      <input style={style} type="text" onChange={props.changed} value={props.username} />
    </div>
  ); 	
};

export default userInput;