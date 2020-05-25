import React, { useState, useEffect } from 'react';
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

const listNames = [
  'Git R Done',
  'Taking Care of Business',
  'My List',
  'TCB⚡',
  'Getting Ready',
  'Pre-Flight',
];

const NewTodo = (props) => {

  const { loadData } = props;

  const classes = useStyles();
  const history = useHistory();

  const desc = React.createRef();
  const name = React.createRef();

  const makeSuggest = () => {
    return listNames[Math.floor(Math.random() * listNames.length)];
  }
  let suggest = makeSuggest();

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
        loadData && loadData();
        name.current.value = makeSuggest();
      })
    })();
  }

  const handleClick = (event) => {
    createTodo();
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Card style={{marginTop: '20px'}}>
        <CardContent>
          <h1>New Todo List</h1>

          <TextField
            id="todo-name"
            label="Name"
            variant="outlined"
            inputRef={name}
            defaultValue={suggest}
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
    </form>
  )
}

export default NewTodo;
