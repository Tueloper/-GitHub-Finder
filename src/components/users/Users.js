import React from 'react';
import UserItem from './userItem';
import Spinner from './../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ loading, users }) => {
	if (loading) {
		return <Spinner />;
	}
	else {
		return <div style={userType}>{users.map((user) => <UserItem key={user.id} user={user} />)}</div>;
	}
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
};

const userType = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1 rem'
};

export default Users;
