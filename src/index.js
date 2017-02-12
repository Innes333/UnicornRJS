import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Advert from './Advert/Advert.js';
import './index.css';
import './main.css';
import './bootstrap/bootstrap.min.css';

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
const advertArray = [
	{
		pic: 'img/unic.png',
		headline: 'Lorem ipsum dolor',
		info: 'Lorem ipsum dolor sit amet, consectetur, Lorem ipsum dolor sit amet, consectetur adipisicing elit.Esse ut eos, pariatur est, qui nihil vitae officiis non laboriosam quia. Id quos minima quam voluptas possimus error fuga corrupti magnam!',
		author: 'Johnny Depp',
		avatar: '../img/depp.png'
	},
	{
		pic: 'img/unic.png',
		headline: 'Lorem ipsum dolor',
		info: 'Lorem ipsum dolor sit amet, consectetur',
		author: 'Johnny Depp',
		avatar: '../img/depp.png'
	}
];
var AppHome = React.createClass({
  render: function() {
    return (
      <div>
        <Header items={menu}/>
        <Main />
        <Advert items={advertArray}/>
      </div>
    )
  }
});

ReactDOM.render(
	<AppHome />,
	document.getElementById('root')
);