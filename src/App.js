import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false
	};
	// lifecycle methods
	async componentDidMount () {
		this.setState({ loading: true });
		const res = await axios.get('https://api.github.com/users?since=135');
		console.log(res);
		this.setState({ users: res.data, loading: false });
	}

	render () {
		const name = 'Tochi ';
		const loading = false;
		const show = true;
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
				{
					loading ? <h5>Loading...</h5> :
					<h1>Hello React, {show && name}, needs you</h1>}
				<h2>Second Div</h2>
			</div>
		);
	}
}

export default App;
