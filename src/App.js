import React, { Component } from 'react';
import './App.css';

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput username={"Peter1"} />
        <UserOutput username={"Peter2"} />
        <UserOutput username={"Peter3"} />
      </div>
    );
  }

}

export default App;
