import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const todoUrl = '/todo/';

const putTaskUrl = '/api/v1/task';

const verb = [ 'Wash', 'Clean', 'Comb', 'Wax', 'Stuff', 'Polish' ];
const subject = [ 'Laundry', 'Dog', 'Windows', 'Car', 'Stuff', 'Silverware' ];

const Task = (props) => {

  const { todoId, loadData } = props;

  const makeSuggest = () => {
    return (
      verb[Math.floor(Math.random() * verb.length)] + ' the ' +
      subject[Math.floor(Math.random() * subject.length)]
    );
  }

  let suggest = makeSuggest();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCreateClick = (event) => {

    const task = {
      name: name.current.value,
      description: desc.current.value,
      target_completion: selectedDate,
      todo_id: todoId
    };

    if (task.name && task.description){
      (async () => {
        fetch(putTaskUrl, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
          body: JSON.stringify(task),
        })
        .then((res) => res.json())
        .then(parsed => {
          loadData();
          name.current.value = makeSuggest();
        })
      })();
    }
  }

  const desc = React.createRef();
  const name = React.createRef();

  return (
    <Box style={{marginTop: '20px'}}>
      <Card>
        <CardContent>
          <h1>Add Item to list</h1>

          <TextField
            id="todo-name"
            label="Name"
            variant="outlined"
            inputRef={name}
            defaultValue={suggest}
          />

          <TextField
            id="todo-description"
            label="description"
            multiline
            rows={4}
            defaultValue="better get this done!"
            variant="outlined"
            inputRef={desc}
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="outline"
              margin="normal"
              label="Due Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>

          <Button variant="contained" onClick={handleCreateClick}>Create</Button>

        </CardContent>

      </Card>
    </Box>
  )
}

export default Task;

