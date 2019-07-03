import React from "react";
import { Context } from "../store/appContext.jsx";

export class Card extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.characters.map((item, index) => {
						return (
							<div
								className="card col-sm-4 d-inline-flex overflow:scroll"
								key={index}>
								<img
									src="https://avatarfiles.alphacoders.com/118/118895.jpg"
									className="card-img-top "
									alt="Card Image Cap"
								/>
								<div className="card-body">
									<h1>{item.name}</h1>
									<h5 className="card-title">
										Gender : {item.gender}
									</h5>
									<p className="card-text">
										Eye-Color : {item.eye_color}
									</p>
									<p className="card-text">
										Hair-Color : {item.hair_color}
									</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
