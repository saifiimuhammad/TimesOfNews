import './App.css';
import React, { Component } from 'react'
import Navbar from "./components/Navbar/Navbar"
import NewsContainer from './components/NewsContainer/NewsContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  pageSize = 9;
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route exact path = "/" element = {<NewsContainer key="general" pageSize = {this.pageSize} country = "in" category = "general" />} />
            <Route exact path = "/business" element = {<NewsContainer key="business" pageSize = {this.pageSize} country = "in" category = "business" />} />
            <Route exact path = "/entertainment" element = {<NewsContainer key="entertainment" pageSize = {this.pageSize} country = "in" category = "entertainment" />} />
            <Route exact path = "/general" element = {<NewsContainer key="general" pageSize = {this.pageSize} country = "in" category = "general" />} />
            <Route exact path = "/health" element = {<NewsContainer key="health" pageSize = {this.pageSize} country = "in" category = "health" />} />
            <Route exact path = "/science" element = {<NewsContainer key="science" pageSize = {this.pageSize} country = "in" category = "science" />} />
            <Route exact path = "/sports" element = {<NewsContainer key="sports" pageSize = {this.pageSize} country = "in" category = "sports" />} />
            <Route exact path = "/technology" element = {<NewsContainer key="technology" pageSize = {this.pageSize} country = "in" category = "technology" />} />
          </Routes>
        </div>
      </Router>
    )
  }
}
