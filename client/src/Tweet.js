import React from 'react';
import './Tweet.css';
import DeleteIcon from '@material-ui/icons/Delete';
import TweetSelector from './Api/TweetSelector';
function Tweet({ username, tweetid, tweetText }) {
	const handleDelete = async (e) => {
		e.preventDefault();
		try {
			const response = await TweetSelector.delete(`/deletetweet/${tweetid}`);
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div className='tweet'>
			<div className='tweet__body'>
				<div className='tweet_header'>
					<div className='tweet_headerText'>
						<h3>{username}</h3>
					</div>
					<div className='tweet__headerDescription'>
						<p>{tweetText}</p>
					</div>
				</div>
				<div className='tweet__footer'>
					<DeleteIcon className='tweet__deleteButton' onClick={handleDelete} />
				</div>
			</div>
		</div>
	);
}

export default Tweet;
