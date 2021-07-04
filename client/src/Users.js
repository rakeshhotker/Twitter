import React from 'react';
import { Button } from '@material-ui/core';
import './Users.css';
function Users() {
	return (
		<div className='allUsers'>
			<div className='user'>
				<div className='username'>username</div>
				<Button className='followUnfollowUser'>Follow</Button>
			</div>
		</div>
	);
}

export default Users;
