import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const fetch = require('node-fetch');
const taskUrl = '/api/v1/task/';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '10px',
    lineHeight: '40px',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    '& .MuiSvgIcon-root': {
      verticalAlign: 'middle',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
      float: 'right',
    },
    '& strong': {
      marginLeft: '10px',
      verticalAlign: 'middle',
      fontSize: '20px',
    }
  },
}));

const Task = (props) => {
  const { task, loadData } = props;

  const classes = useStyles();
  const history = useHistory();

  const desc = React.createRef(); 
  const name = React.createRef(); 

  const handleCompleteClick = () => {
    
    if (task.name && task.description){
      (async () => {
        fetch(`${taskUrl}${task.id}`, {
          method: 'PATCH',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: JSON.stringify({
            ...task,
            ...{complete: true}
          })
        })
        .then((res) => res.json())
        .then(parsed => {
          loadData();
        })
      })();
    }
  }

  const handleDeleteClick = () => {
    if (task.name && task.description){
      (async () => {
        fetch(`${taskUrl}${task.id}`, {
          method: 'DELETE',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        .then(parsed => {
          loadData();
        })
      })();
    }
  }

  return (
    <Card variant="outlined" className={classes.root} >
      { task.complete
        ? <CheckBoxIcon/>
        : <CheckBoxOutlineBlankIcon/>
      }
      <strong>{ task.name }</strong>

      <Button
        onClick={handleDeleteClick}
        variant="contained"
        color="secondary"
        size="small"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      { task.complete
       ? <div style={{float:'right'}}>
          <span>completed: {task.completion} </span>
        </div>
       : <Button
          onClick={handleCompleteClick}
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<CheckIcon />}
        >
          Complete
        </Button>
       }
    </Card>
    
  );
}

export default Task;
