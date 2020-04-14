import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
	// static props can be  used asa a default props if its not passed where the componenets are called
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github'
	};

	// this specify the properties of the props be used
	static propTypes = {
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired
	};

	render () {
		return (
			<div className='bg-primary px-2'>
				<h1>
					<i className={this.props.icon} />
					{this.props.title}
				</h1>
			</div>
		);
	}
}

export default Navbar;
