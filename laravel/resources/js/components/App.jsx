import React, { useState, useEffect } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todo from './Todo';
import Todos from './Todos';
import NewTodo from './NewTodo';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const home = '/todos';

const theme = createMuiTheme({ 
  palette: {
    primary: blue,
    secondary: red,
  },  
  status: {
    danger: 'orange',
  },  
}); 

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/todo/new">
            <NewTodo />
          </Route>
          <Route path="/todo/:id">
            <Todo />
          </Route>
          <Route path="/">         
            <Redirect to={home} />          
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
