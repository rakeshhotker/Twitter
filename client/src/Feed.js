import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import tweetSelector from './Api/TweetSelector';
import Tweet from './Tweet';
import './Feed.css';
function Feed({ username }) {
	const [tweets, setTweets] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await tweetSelector.get(`/gettweets/${username}`);
				// console.log(response.data.data.users_tweets);
				setTweets(response.data.data.users_tweets);
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchData();
	});
	return (
		<div className='feed'>
			<div className='feed__header'>
				<h2>Welcome {username}</h2>
			</div>
			<TweetBox username={username} />
			{tweets &&
				tweets.map((tweet) => {
					return (
						<Tweet
							username={username}
							key={tweet.tweet_id}
							tweetid={tweet.tweet_id}
							tweetText={tweet.tweet}
						/>
					);
				})}
		</div>
	);
}

export default Feed;
