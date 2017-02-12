import React, { Component } from 'react';
import './Advert.css'

var advertArray = [
	{
		'pic': '',
		'headline': 'Lorem ipsum dolor',
		'info': 'img/unic.png',
		'author': 'Johnny Depp',
		'avatar': 'img/depp.png'
	}
];
class Advert extends Component {
	render() {
		return (
			<section id="advert">
				<h2 className="s-heading">Advert</h2>

				<div className="container">
					<div className="row">
						<div className="slider col-md-12">	
							{this.props.advertArray.map((item,index) => 

								<div className="item">
									<img className="unicorn-poster" src="{}" alt="unicorn">
									<div className="w-info">
										<div className="content">
											<h4 className="t-heading"> Lorem ipsum dolor</h4>
											
										</div>
										<div className="w-author-info">
											<img className="avatar" src="" alt="">
											<div className="author">Johnny Depp</div>
										</div>
									</div>
								</div>								
								})
							
						</div>
					</div>
				</div>

			</section>
		);
	}
}

export default Advert;