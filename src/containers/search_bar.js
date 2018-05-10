import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event){
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();

		// need to use the form value to fetch data
	}

	//onChange={event => this.onInputChange(event.target.value)} 
	render(){
		return (
			<div>
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input 
						placeholder="place the city you want know the weather."
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange}
					/>

					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</form>
			</div>
		);
	}

}