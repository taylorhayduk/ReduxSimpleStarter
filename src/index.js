////////////////////////////////////////////////////////////////////////
//////////////////// UDEMY REACT & REDUX Section 1 /////////////////////
////////////////////////////////////////////////////////////////////////


/////////////////////////////index.js///////////////////////////////////

// YOUTUBE
const API_KEY = 'AIzaSyBn2h4EUP2YBjXB-zk5XX0pfuhV6jssSBo';
// npm install --save youtube-api-search


// Note: Use babel.io to see ES6 + JSX >>> Vanilla ES5


// Import react & react-dom from node_modules
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';  // ./ 

// Create a new component to produce html.
const App = () => { // const is ES6 variable that can't change
  // This is JSX (javascript dialect that gets transpiled by Webpack)
  return (
    <div>
      <SearchBar />
    </div>
  )
}
  // Note: Using arrow function in ES6 changes the value of 'this' but otherwise normal function

////////////////////////////////////////////////////////////////////////
//////////////////// UDEMY REACT & REDUX Section 2 /////////////////////
////////////////////////////////////////////////////////////////////////

// Data should be handled by 'most parent component'


// Place produced HTML into the page 
ReactDOM.render(<App />, document.querySelector('.container'));  
  // Note: <App /> is the same as <App></App>.  This make an instance of the class App
  // Note: 2nd argument to render method is the location to put the rendered component in the DOM