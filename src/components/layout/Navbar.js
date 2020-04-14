import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
	return (
		<div className='bg-primary px-2'>
			<h1>
				<i className={icon} />
				{title}
			</h1>
		</div>
	);
};

// static props can be  used asa a default props if its not passed where the componenets are called
Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
};

// this specify the properties of the props be used
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};
export default Navbar;
