import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						React Webapp Boilerplate
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button
								className="btn btn-primary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites
							</button>
							<div
								className="dropdown-menu"
								aria-labelledby="dropdownMenuButton">
								<Link className="dropdown-item" to="#">
									Action
								</Link>
								<Link className="dropdown-item" to="#">
									Another action
								</Link>
								<Link className="dropdown-item" to="#">
									Something else here
								</Link>
							</div>
						</div>
					</Link>
				</div>
			</nav>
		);
	}
}
