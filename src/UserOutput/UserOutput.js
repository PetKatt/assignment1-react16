import React from "react";

const userOutput = (props) => {
  return (
    <div>
      <p>My Name is: {props.username}</p>  
      <p>Second Paragraph</p>
    </div>
  );
};

export default userOutput;