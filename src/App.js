
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize = {10}/>
      </div>
    )
  }
}
