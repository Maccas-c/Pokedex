import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
export default class PokemonList extends Component {
	state = {
		pokemonFetchedList: null,
		pokemonListToDisplay: null,
		page: 1,
	};
	url = "https://pokeapi.co/api/v2/pokemon?offset=&limit=96";
	perPage = 12;

	async componentDidMount() {
		const res = await axios.get(this.url);
		this.setState({
			pokemonFetchedList: res.data["results"],
			pokemonListToDisplay: res.data["results"].slice(0, this.perPage),
		});
	}

	getPaginationArray() {
		const start = 0;
		const end = Math.ceil(
			this.state.pokemonFetchedList.length / this.perPage
		);
		return Array(end - start)
			.fill()
			.map((_, idx) => start + idx + 1);
	}

	bindPageChange(idx) {
		this.setState({
			page: idx,
		});
		this.setState({
			pokemonListToDisplay: this.state.pokemonFetchedList.slice(
				this.state.page * this.perPage - this.perPage,
				this.state.page * this.perPage
			),
		});
	}

	render() {
		return (
			<React.Fragment>
				{this.state.pokemonListToDisplay ? (
					<div>
						<div className="btn btn-outline-danger ">
							{this.getPaginationArray().map(num => (
								<button
									className="btn btn-outline-light"
									onClick={e => this.bindPageChange(num, e)}
									key={num}
								>
									{num}
								</button>
							))}
						</div>
						<div className="row">
							{this.state.pokemonListToDisplay.map(pokemon => (
								<PokemonCard
									key={pokemon.name}
									name={pokemon.name}
									url={pokemon.url}
								/>
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
