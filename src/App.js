import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BlogPage } from "./containers/BlogPage/BlogPage";
import { LoginPage } from "./containers/LoginPage/LoginPage";

export class App extends Component {


  handleLogIn = () => {
    this.setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', true)
    localStorage.setItem('userName', 'goToSleep')
  }

  handleLogOut = () => {
    this.setIsLoggedIn(false)
    localStorage.setItem('isLoggedIn', false)
    localStorage.removeItem('userName')
  }

  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          <Header handleLogOut={this.handleLogOut} />
  
          <main>
            <Switch>
  
          
  
              <Route exact path="/blog" render={props => <BlogPage {...props} />} />
              <Route exact path="/login" render={props => <LoginPage {...props} handleLogIn={this.handleLogIn} />} />
            </Switch>
          </main>
  
          <Footer name="React Blog" year={new Date().getFullYear()} />
        </div>
      </BrowserRouter>
    );
    }
}
