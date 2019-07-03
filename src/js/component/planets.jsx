import React from "react";
import { Context } from "../store/appContext.jsx";

export class Planets extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.planets.map((item, index) => {
						return (
							<div
								className="planets border w-35 d-inline-block col-sm-3"
								key={index}>
								<img
									src="#"
									className="card-img-top"
									alt="Card Image Cap"
								/>
								<div className="card-body">
									<h1>Name : {item.name}</h1>
									<h5 className="card-title">
										Population : {item.population}
									</h5>
									<p className="card-text">
										Terrain : {item.terrain}
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
