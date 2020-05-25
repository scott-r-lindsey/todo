import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';  
import ListAltIcon from '@material-ui/icons/ListAlt';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { formatDistance, subDays } from 'date-fns';
import NewTodo from './NewTodo';

const fetch = require('node-fetch');
const dataUrl = '/api/v1/todo';
const todoUrl = '/todo/';
const deleteUrl = '/api/v1/todo/';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '10px',
    lineHeight: '40px',
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
    },
    '& em': {
      fontSize: '10px',
      marginLeft: '10px',
      verticalAlign: 'middle',
      opacity:'.8',
    },
    '& > span': {
      marginRight: '10px',
      lineHeight: '46px',
      verticalAlign: 'middle',
      float: 'right',
    },
  },
}));

const Todos = (props) => {

  const [data, setData] = useState(null);
  const classes = useStyles();

  const handleDeleteClick = (id) => {
    (async () => {
      fetch(`${deleteUrl}${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      })
      .then(parsed => {
        loadData();
      })
    })();
  }

  const loadData = () => {
    (async () => {             
      await fetch(dataUrl, { method: 'GET' })
        .then((res) => res.json())      
        .then((parsed) => {
          setData(parsed, []);
        });
    })();
  }

  useEffect(() => {            
    loadData();
  }, []);

  return (
    <>
      {data ? (
        <>
          <Card>
            <CardContent>
              {
                data.map(todo => {

                  let foo = [];

                  return (
                    <Card key={todo.id} variant="outlined" className={classes.root} >
                      <Link to={`${todoUrl}${todo.id}`}>
                        <ListAltIcon />
                        <strong>{todo.name}</strong>
                      </Link>
                      <em>
                        ({ todo.tasks.filter(value => value.complete).length }/
                        { todo.tasks.length } complete)
                      </em>
                      <Button
                        onClick={() => handleDeleteClick(todo.id)}
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        startIcon={<DeleteIcon />}    
                      >
                        Delete
                      </Button>
                      <span>
                        Created { moment(todo.created_at).fromNow() }
                      </span>
                    </Card>
                  );
                })
              }
            </CardContent>
          </Card>

          <NewTodo loadData={loadData} />
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  )
}

export default Todos;
