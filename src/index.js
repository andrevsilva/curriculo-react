import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from "./Home"
import { minhaHistoria } from "./minhaHistoria"
import { Skills } from "./Skills"
import { BrowserRouter , Switch , Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/minhaHistoria" component={minhaHistoria}></Route>
      <Route path="/Skills" component={Skills}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);




