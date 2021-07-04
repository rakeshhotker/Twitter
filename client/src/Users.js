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
	const handleSubmit = (e) => async (user) => {
		e.preventDefault();
		try {
			const response = await TweetSelector.post(`/addfollower/${user}`);
			console.log(response);
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div className='allUsers'>
			<h3>Follow Users</h3>
			{users &&
				users.map((user) => {
					return (
						<React.Fragment key={user.user_id}>
							<div className='user'>
								<div className='username'>{user.username}</div>
								<Button
									className='followUser'
									onClick={(e) => handleSubmit(user.username)}
								>
									follow
								</Button>
							</div>
						</React.Fragment>
					);
				})}
		</div>
	);
}

export default Users;
