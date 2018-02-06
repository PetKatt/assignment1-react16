import React from "react";

const userInput = (props) => {
  return(
    <div>
      <input type="text" onChange={props.changed} />
    </div>
  ); 	
};

export default userInput;