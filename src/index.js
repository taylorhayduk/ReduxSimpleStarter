// Use babel.io to see ES6 + JSX >> Vanilla ES5

import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.  Should produce HTML
const App = function () { // const is es6 variable that cant change
  return <div>Hi!</div>;  // This is JSX (javascript dialect that gets transpiled by Webpack)
}

// Throw produced HTML into the page 
ReactDOM.render(<App />, document.querySelector('.container'));  
  // <App /> is the same as <App></App>.  Makes it an instance of the class App
  // 2nd argument is where to put the rendered App