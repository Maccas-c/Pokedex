import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
export default class PokemonList extends Component {
	state = {
		pokemonFetchedList: null,
		
	};
	url = "https://pokeapi.co/api/v2/pokemon?offset=&limit=120";


	async componentDidMount() {
		const res = await axios.get(this.url);
		this.setState({
			pokemonFetchedList: res.data["results"],
			
	}

	

	render() {
		return (
			<React.Fragment>
				{this.state.pokemonListToDisplay ? (
					<div>
						<div className="btn btn-outline-danger">
							{this.getPaginationArray().map(num => (
								<button
									className="btn btn-light"
									onClick={e => this.bindPageChange(num, e)}
									key={num}
								>
									{num}
								</button>
							))}
						</div>
						
					</div>
				) : (
					<h1>Loading Pokemon</h1>
				)}
			</React.Fragment>
		);
	}
}
