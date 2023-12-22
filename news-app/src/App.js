import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar/Navbar"
import NewsContainer from './components/NewsContainer/NewsContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsContainer/>
      </div>
    )
  }
}
