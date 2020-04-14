import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {
	render () {
		const name = 'Tochi ';
		const loading = false;
		const show = true;
		return (
			<div className='App'>
				<Navbar />
				{
					loading ? <h5>Loading...</h5> :
					<h1>Hello React, {show && name}, needs you</h1>}
				<h2>Second Div</h2>
			</div>
		);
	}
}

export default App;
