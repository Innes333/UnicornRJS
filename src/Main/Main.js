import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
	render() {
  	return (
			<main id='home' style={{"height": window.innerHeight }}>
				<div className='content-block center'>
					<h1 className='heading'>Welcome to Unicorn portal</h1>
					<h3 className='sub-heading'>Lorem ipsum lorem</h3>
				</div>
			</main>
		);
	}
}

export default Main;