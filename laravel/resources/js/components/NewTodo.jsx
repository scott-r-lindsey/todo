import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const fetch = require('node-fetch');
const putTodoUrl = '/api/v1/todo';
const todoUrl = '/todo/';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
      float: 'right',
    }
  },
}));

const NewTodo = (props) => {

  const classes = useStyles();
  const history = useHistory();

  const desc = React.createRef();
  const name = React.createRef();

  const createTodo = () => {

    (async () => {
      fetch(putTodoUrl, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
          name: name.current.value,
          description: desc.current.value,
        }),
      })
      .then((res) => res.json())
      .then(parsed => { 
        history.push(`${todoUrl}${parsed.todo.id}`);
      })
    })();
  }

  const handleClick = (event) => {
    createTodo();
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box>
        <Card>
          <CardContent>
            <h1>New Todo List</h1>

            <TextField
              id="todo-name"
              label="Name"
              variant="outlined"
              inputRef={name}
            /><br />
            <TextField
              id="todo-description"
              label="description"
              multiline
              rows={4}
              defaultValue="My new to-do list"
              variant="outlined"
              inputRef={desc}
            />

            <Button variant="contained" onClick={handleClick}>Create</Button>
            <br/>
            <br/>
          </CardContent>

        </Card>
      </Box>
    </form>
  )
}

export default NewTodo;
