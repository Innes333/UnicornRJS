import React, { Component } from 'react';
import './Advert.css';

class Advert extends Component {
	
	render() {	
		return (
			<section id="advert">
				<h2 className="s-heading">Advert</h2>

				<div className="container">
					<div className="row">
						<div className="col-md-12 slider" ref="slider">	
							{this.props.items.map((item,index) => 

								<div className="item" key={index}>
									<img className="unicorn-poster" src={item.pic} alt="unicorn"/>
									<div className="w-info">
										<div className="content">
											<h4 className="t-heading"> {item.headline}</h4>
											{item.info}
										</div>
										<div className="w-author-info">
											<img className="avatar" src={item.avatar} alt=""/>
											<div className="author">{item.author}</div>
										</div>
									</div>
								</div>								
								)}

						</div>
					</div>
				</div>

			</section>
		);
	}
}

export default Advert;