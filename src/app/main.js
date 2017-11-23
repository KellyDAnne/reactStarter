console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Header),
    document.getElementById('root')
  );
});