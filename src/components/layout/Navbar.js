import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
	return (
		<nav className='bg-primary' style={navSett}>
			<h1>
				<i className={icon} style={{ padding: '0 5px' }} />
				{title}
			</h1>
			<ul className='text-white' style={navSett}>
				<li>
					<Link to='/' className='px-1'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

const navSett = {
	display: 'flex',
	justifyContent: 'space-between',
	padding: '5px 30px'
};

// static props can be  used asa a default props if its not passed where the componenets are called
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fa fa-github'
};

// this specify the properties of the props be used
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};
export default Navbar;
