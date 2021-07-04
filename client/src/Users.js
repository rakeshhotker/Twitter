import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './Users.css';
import TweetSelector from './Api/TweetSelector';
function Users({ username }) {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await TweetSelector.get(
					`getUserstoFollow/${username}`
				);
				setUsers(response.data.data.users);
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchData();
	});
	return (
		<div className='allUsers'>
			<h3>Follow Users</h3>
			{users &&
				users.map((user) => {
					return (
						<div className='user'>
							<div className='username'>{user.username}</div>
							<Button className='followUser'>follow</Button>
						</div>
					);
				})}
		</div>
	);
}

export default Users;
