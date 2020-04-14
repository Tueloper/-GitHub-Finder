import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		name: ''
	};

	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		this.props.searchUsers(this.state.name);
	};

	render () {
		const { clearUsers, showClear } = this.props;
		return (
			<div>
				<form className='form mt-2' onSubmit={this.onSubmit}>
					<input
						type='text'
						name='name'
						value={this.state.name}
						onChange={this.onChange}
						placeholder='Search for Users....'
					/>
					<button type='submit' className='btn btn-primary  btn-block mb-2'>
						Search
					</button>
				</form>
				{showClear && (
					<button className='btn btn-light btn-block mt-2' onClick={clearUsers}>
						Clear
					</button>
				)}
			</div>
		);
	}
}

export default Search;
