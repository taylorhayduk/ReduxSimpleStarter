////////////////////////////////////////////////////////////////////////
//////////////////// UDEMY REACT & REDUX Section 1 /////////////////////
////////////////////////////////////////////////////////////////////////

// // Note: Use babeljs.io to see ES6 + JSX >>> Vanilla ES5

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

import _ from 'lodash';
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

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('TestTube News');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    // use lodash to make videoSearch only run every 300 ms

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
    // use {} to reference javascript variable inside JSX
    // pass videos prop to the VideoList component (arrives as argument in function)
    // Note: use props in functional component and this.props in class component
    // onVideoSelect is a callback passed '2 levels' down to video_list_item
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));