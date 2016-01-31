////////////////////////////////////////////////////////////////////////
//////////////////// UDEMY REACT & REDUX Section 1 /////////////////////
////////////////////////////////////////////////////////////////////////

// // Note: Use babel.io to see ES6 + JSX >>> Vanilla ES5

// // Import react & react-dom from node_modules
// import React from 'react';
// import ReactDOM from 'react-dom';
// import YTSearch from 'youtube-api-search';
// import SearchBar from './components/search_bar';

// // Data should be handled by 'most parent component'
// // YOUTUBE
// const API_KEY = 'AIzaSyBn2h4EUP2YBjXB-zk5XX0pfuhV6jssSBo';
// // npm install --save youtube-api-search
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//   console.log(data);
// })

// // Create a new component to produce html.
// const App = () => { // const is ES6 variable that can't change
//   // This is JSX (javascript dialect that gets transpiled by Webpack)
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   )
// }
//   // Note: Using arrow function in ES6 changes the value of 'this' but otherwise normal function

// // Place produced HTML into the page 
// ReactDOM.render(<App />, document.querySelector('.container'));  
//   // Note: <App /> is the same as <App></App>.  This make an instance of the class App
//   // Note: 2nd argument to render method is the location to put the rendered component in the DOM

////////////////////////////////////////////////////////////////////////
//////////////////// UDEMY REACT & REDUX Section 2 /////////////////////
////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBn2h4EUP2YBjXB-zk5XX0pfuhV6jssSBo';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {  // standard arrow function
      this.setState({ videos });
      // this.setState({videos: videos}) >> only works when key and variable name are the same
    })
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
    // use {} to reference javascript variable inside JSX
    // pass videos prop to the VideoList component (arrives as argument in function)
    // Note: use props in functional component and this.props in class component
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));