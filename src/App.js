import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './assets/css/App.css';

class App extends Component {
	state = {
		users: [],
		loading: false
	};
	// lifecycle methods
	async componentDidMount () {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users?since=135&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		console.log(res);
		this.setState({ users: res.data, loading: false });
	}

	render () {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
