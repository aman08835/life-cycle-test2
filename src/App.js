import React, { Component } from 'react';
import ParentComponent from './ParentComponent';

class App extends Component {
  render() {
    return (
      <div>
        <ParentComponent prop="p"/>
      </div>
    );
  }
}

export default App;
