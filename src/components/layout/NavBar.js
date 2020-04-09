import React, { Component } from "react";

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className=" navbar navbar-light bg-light fixed-top  ">
					<a className="navbar brand col-sm-3 col-md-2 mr-0 align-items-center badge badge-primary text-wrap auto ">
						Pokedex
					</a>
					<ul class="pagination justify-content-end">
						<li class="page-item disabled">
							<a class="page-link" href="#" tabindex="-1">
								Previous
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								1
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">
								2
							</a>
						</li>

						<li class="page-item">
							<a class="page-link" href="#">
								Next
							</a>
						</li>
					</ul>
					<form className="form-inline">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						></input>
						<button
							className="btn btn-outline-fail my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</nav>
			</div>
		);
	}
}
