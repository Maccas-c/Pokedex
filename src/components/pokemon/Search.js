import React, { Component } from "react";

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {filteredPokemons = [],
		};
	}
	searchFilter(input) {
		let pokemons = this.state.pokemons;
		let filteredPokemons = [];
		pokemons.filter(pokemon => {
			if (pokemon.name.includes(input.toLowerCase()) || input === "")
				filteredPokemons.push(pokemon);
			return null;
		});
		this.setState({
			filteredPokemons,
			
		});
	}

	render() {
		const filteredPokemons = this.state.filteredPokemons;
        let pokemonsVisible = [];
        if(!this.state.isLoading) {
            for (let i = (((this.state.currentPage - 1) * this.state.pokemonsPerPage)); i < ((this.state.currentPage) * this.state.pokemonsPerPage); i++)
                if(filteredPokemons[i]) pokemonsVisible.push(filteredPokemons[i]);
        }

		return <div></div>;
	}
}

export default Search;
