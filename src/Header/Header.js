import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
	render() {
		return (
			<header>
			<div className="nav-bar">
				<ul className="menu">
					{this.props.items.map((item,index) => 
						<li className="menu-item" key={index}>
							<a href={item.link} key={index}>{item.label}</a>
						</li>
					)}
				</ul>
			</div>
		</header>
		);
	}
}

export default Header;