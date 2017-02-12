import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import './index.css';
import './main.css';

const menu = [
	{
		link: '#home',
		label: 'Home'
	},
	{
		link: '#advetr',
		label: 'Advert'
	},
	{
		link: '#home',
		label: ''
	},
	{
		link: '#b-days',
		label: 'Birthdays'
	},
	{
		link: '#new-member',
		label: 'Home'
	}	
];

var AppHome = React.createClass({
  render: function() {
    return (
      <div>
        <Header items={menu}/>
        <Main />
      </div>
    )
  }
});

ReactDOM.render(
	<AppHome />,
	document.getElementById('root')
);