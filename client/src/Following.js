import React, { useState, useEffect } from 'react';
import TweetSelector from './Api/TweetSelector';
import { Button } from '@material-ui/core';
import './Following.css';
function Following({ username }) {
	const [following, setFollowing] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await TweetSelector.get(`/getfollowing/${username}`);
				setFollowing(response.data.data.following);
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchData();
	});
	return (
		<div className='following'>
			<h3>People You follow</h3>
			{!following && <div>No followers</div>}
			{following &&
				following.map((follower) => {
					return (
						<div className='followingUsers'>
							<div className='followingUsername'>{follower.username}</div>
							<Button className='Unfollow'>Unfollow</Button>
						</div>
					);
				})}
		</div>
	);
}

export default Following;
