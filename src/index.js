import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  //render takes 2 args:
    <App />,
    //1)the component
  document.getElementById('root')
  //2)the element we are appending the component to
  //which is also what is rendered by the index.html
  //file in the public folder
);