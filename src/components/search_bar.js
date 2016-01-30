//  import React from 'react'; // always do this because (e.g. <input /> JSX becomes React.createElement...)
import React, { Component } from 'react';  // { Component } means: const Component = React.Component;

// FUNCTIONAL COMPONENT (dumb component)
// const SearchBar = () => {
//   return <input />
// };

// CLASS COMPONENT - has way to keep track of what's going on
// Give SearchBar functionality from React.Component class
class SearchBar extends Component {
  // each class based component has its own state object
  constructor(props) {
    super(props); // calling parent method with 'super'

    this.state = { term: 'Starting Value'};  // set state as new object in constructor, everywhere else ALWAYS use this.setState
  }

  // every class needs a render method
  render() {
    // return <input onChange={this.onInputChange} />  // taps into onChange {vanilla JS} and calls function in {}
    // below: when onChange triggered, ES6 function runs and we use this.setState to set state
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })} />
          Value of the input: {this.state.term}
      </div>
    )
  }

  // onInputChange(event) { // all browser events get event object that describes event
  //   console.log(event.target.value);
  // }
}

// we must export the component to be used elsewhere
export default SearchBar;