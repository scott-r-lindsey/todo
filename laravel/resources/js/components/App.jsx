import React, { useState, useEffect } from 'react';
import {
  Link,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Todo from './Todo';
import Todos from './Todos';
import NewTodo from './NewTodo';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

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
        <Box>
          <Card style={{marginBottom: '20px'}}>
            <CardContent>
              <Link to="/todos">All Lists</Link>
              <strong style={{margin: '0 10px'}}>|</strong>
              <Link to="/todo/new">New List</Link>
              <strong style={{margin: '0 10px'}}>|</strong>
              <a href="https://resume.scott.to/">Scott Lindsey</a>
            </CardContent>
          </Card>

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
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
