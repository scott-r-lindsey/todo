import React, { useState, useEffect } from 'react';

const fetch = require('node-fetch');
const dataUrl = '/api/v1/todo';

const Todos = (props) => {

  const [data, setData] = useState(null);

  useEffect(() => {            
    (async () => {             
      await fetch(dataUrl, { method: 'GET' })
        .then((res) => res.json())      
        .then((parsed) => {
          setData(parsed, []);
        });
    })();
  }, []);

  return (
    <>
      {data ? (
        <>
          {
            data.map(todo => {
              return (
                <div key={todo.id}>{todo.name}</div>
              );
            })
          }
        </>

      ) : (
        <div>no data</div>
      )}
    </>
  )
}

export default Todos;
