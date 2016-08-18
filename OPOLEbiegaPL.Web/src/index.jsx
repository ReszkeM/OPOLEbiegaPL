import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import Content from './components/Content';

const content = { 
    persons: [
        {
            firstName: 'Imie',
            lastName: 'Nazwisko',
            description: '123'
        },
        {
            firstName: 'Imie1',
            lastName: 'Nazwisko1',
            description: 'abc'
        },
    ],
    events: [
        {
            name: 'Event1',
            place: 'Place1',
            date: '21.08.2016 07:00',
            distance: '25km',
            description: '123'
        },
        {
            name: 'Event2',
            place: 'Place2',
            date: '17.09.2016 07:00',
            distance: '53km',
            description: 'abcfgdfgd'
        }
    ],
    announcements: [
        {
            name: 'Announcement1',
            place: 'Place1',
            date: '21.07.2016 07:00',
            distance: '31km',
            description: '123'
        },
        {
            name: 'Announcement2',
            place: 'Place2',
            date: '17.06.2016 07:00',
            distance: '33km',
            description: 'abcfgdfgd'
        }
    ],
    friends: [
        {
            name: 'Friend1',
            imageURL: 'http://design.ubuntu.com/wp-content/uploads/ubuntu-logo32.png'
        },
        {
            name: 'Friend2',
            imageURL: 'https://d11xdyzr0div58.cloudfront.net/static/logos/apple-touch-icon-144x144.38cf584757c3.png'
        }
    ],
    contact: {
        name: '',
        email: '',
        phone: '',
        title: '',
        message: ''
    }
};

// render menu
ReactDOM.render(
  <Menu menuItems={['Persons', 'Friends', 'Events', 'Announcement', 'Contact']} />,
  document.getElementById('menu')
);

// render menu
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

// render site content
ReactDOM.render(
  <Content content={content} currentView='Friends' />,
  document.getElementById('content')
);

