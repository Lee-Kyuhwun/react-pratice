import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';

const App = () => {
  return (
    <MyComponent name="react" favoriteNumber={1}>
      리액트
    </MyComponent>
  );
};

export default App;
