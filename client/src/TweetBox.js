import React, { useState } from 'react';
import './TweetBox.css';
import { Button } from '@material-ui/core';
import TweetSelector from './Api/TweetSelector';
function TweetBox({ username }) {
	const [tweet, setTweet] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await TweetSelector.post(`/addtweet/${username}`, {
				tweet_text: tweet,
			});
			setTweet('');
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div className='tweetBox'>
			<form>
				<div className='tweetBox__input'>
					<textarea
						value={tweet}
						placeholder="What's happening!"
						onChange={(e) => setTweet(e.target.value)}
					/>
				</div>
				<Button className='tweetBox__tweetButton' onClick={handleSubmit}>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
