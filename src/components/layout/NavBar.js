import React, { Component } from "react";

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className=" navbar navbar-light bg-light fixed-top  ">
					<a className="navbar brand col-sm-3 col-md-2 mr-0 align-items-center badge badge-primary text-wrap auto ">
						Pokedex
					</a>

					<form className="form-inline d-flex justify-content-center md-form form-sm mt-0 ">
						<input
							className="form-control form-control-sm ml-3 "
							type="search"
							placeholder="Search by name"
							aria-label="Search"
						></input>
					</form>
				</nav>
			</div>
		);
	}
}
