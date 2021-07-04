import React, { useState, useEffect } from 'react';
import TweetSelector from './Api/TweetSelector';
import './Followers.css';
function Followers({ username }) {
	const [followers, setFollowers] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await TweetSelector.get(`/getfollowers/${username}`);
				setFollowers(response.data.data.followers);
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchData();
	});
	return (
		<div className='followers'>
			<h3>Followers</h3>
			{!followers && <div>No followers</div>}
			{followers &&
				followers.map((follower) => {
					return (
						<React.Fragment key={follower.follower_username}>
							<div className='follower'>
								<div className='followername'>{follower.follower_username}</div>
							</div>
						</React.Fragment>
					);
				})}
		</div>
	);
}

export default Followers;
