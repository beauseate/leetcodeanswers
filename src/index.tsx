import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import NavBar from './Components/NavBar';
import EasyList from './Components/EasyList';
import MediumList from './Components/MediumList';
import HardList from './Components/HardList';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
    <Router forceRefresh={true}>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <NavBar />
          <EasyList />
          <MediumList />
          <HardList />
        </Route>
      </Switch>
    </Router>,
    document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
