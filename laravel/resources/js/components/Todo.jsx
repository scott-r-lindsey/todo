import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import NewTask from './NewTask';
import Task from './Task';

const dataUrl = '/api/v1/todo/';
const fetch = require('node-fetch');

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
      float: 'right',
    },
    '& h1': {
      margin: 0,
    }
  },
}));

const Todo = (props) => {

  const classes = useStyles();
  const history = useHistory();

  const [data, setData] = useState(null);
  const { id } = useParams();  

  const loadData = async () => {
    await fetch(`${dataUrl}${id}`, { method: 'GET' })
      .then((res) => res.json())
      .then((parsed) => {
        setData(parsed, []);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (

    <>
      {data ? (
        <>
          <form className={classes.root} noValidate autoComplete="off">
            <Box>
              <Card>
                <CardContent>
                  <h1>{ data.name }</h1>
                  <strong>{ data.description }</strong><br />
                  <em>Contains { data.tasks.length } item(s)</em>

                  <div style={{padding: '10px 0'}}>
                    {
                      data.tasks.map(task => {
                        return (
                          <Task 
                            key={task.id} 
                            task={task} 
                            loadData={loadData}
                          />
                        );
                      })
                    }
                  </div>


                  <br/>
                  <br/>

                </CardContent>

              </Card>
            </Box>

            <NewTask todoId={data.id} loadData={loadData} foo="foo" />

         </form>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>

  )
}

export default Todo;

