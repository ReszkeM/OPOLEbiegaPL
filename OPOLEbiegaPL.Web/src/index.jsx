import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';

const menuItems = ['Persons', 'Friends', 'Events', 'Announcement', 'Contact'];

// render menu
ReactDOM.render(
  <Menu menuItems={menuItems} />,
  document.getElementById('menu')
);

// render site content
ReactDOM.render(
  <Menu menuItems={menuItems} />,
  document.getElementById('content')
);

