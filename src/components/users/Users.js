import React, { Component } from 'react';
import UserItem from './userItem';

class Users extends Component {
	render () {
		return <div style={userType}>{this.props.users.map((user) => <UserItem key={user.id} user={user} />)}</div>;
	}
}

const userType = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1 rem'
};

export default Users;
