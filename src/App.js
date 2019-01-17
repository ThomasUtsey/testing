import Headline from './components/headline';
import React from 'react'
import Greeting from './components/greeting';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Headline/>
      <Greeting name = "tom" age = {40}/>
      </div>
    );
  }
  

  }



export default App;
