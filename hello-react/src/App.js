import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
        <button onClick={() => this.scrollBox.scrollToBotton()}>
          맨 밑으로
        </button>
      </div>
    );
  }
  //return <Say />;
  // return <Counter />;
  // <MyComponent name="react" favoriteNumber={1}>
  //   리액트
  // </MyComponent>
}

export default App;
