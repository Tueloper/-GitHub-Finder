import React from 'react';
import UserItem from './userItem';
import Spinner from './../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ loading, users }) => {
	if (loading) {
		return <Spinner />;
	}
	else if (users) {
		return <div style={userType}>{users.map((user) => <UserItem key={user.id} user={user} />)}</div>;
	}
	else {
		return (
			<h1 style={{ fontSize: 'italic' }} className='text-center'>
				No User Found!!....
			</h1>
		);
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
