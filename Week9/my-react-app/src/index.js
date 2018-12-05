import React from 'react';
import ReactDOM from 'react-dom';

const users = [
  {name: 'John', age: 32},
  {name: 'Mary', age: 22},
  {name: 'Sue', age: 44}
];

// User Component
function User(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p style = {{'color': 'red'}}>{props.age}</p>
    </div>
  );
}

const userList = users.map( u => <User name={u.name} age = {u.age} />);

ReactDOM.render(
  <div>{userList}</div>,
  document.getElementById('root')
);
