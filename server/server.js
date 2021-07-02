require('dotenv').config();
const express = require('express');
const cors = require('cors');
//database
const db = require('./db/index');
const app = express();
app.use(express.json());
app.use(cors());
//route to get all followers
app.get('/getfollowers/:username', async (req, res) => {
	try {
		const { username } = req.params;
		const response = await db.query(
			'select follower_username from followers where username=$1',
			[username.toString()]
		);
		// console.log(response);
		res.status(200).json({
			status: 'success',
			data: {
				followers: response.rows,
			},
		});
	} catch (error) {
		console.error(error.message);
	}
});
//route to add followers
app.post('/addfollower/:username', async (req, res) => {
	try {
		const { username } = req.params;
		const { follower_name } = req.body;
		const addfollower = await db.query(
			'insert into followers(username,follower_username) values($1,$2) returning *',
			[username.toString(), follower_name.toString()]
		);
		res.status(200).json({
			status: 'success',
			data: {
				followers: addfollower.rows,
			},
		});
	} catch (error) {
		console.error(error.message);
	}
});
//route to get all people user follows
app.get('/getfollowing/:username', async (req, res) => {
	try {
		const { username } = req.params;
		const response = await db.query(
			'select user_following_username from following where username=$1',
			[username.toString()]
		);
		// console.log(response);
		res.status(200).json({
			status: 'success',
			data: {
				following: response.rows,
			},
		});
	} catch (error) {
		console.error(error.message);
	}
});
//route to get all tweets of a user
app.get('/gettweets/:username', async (req, res) => {
	try {
		const { username } = req.params;
		const response = await db.query(
			'select tweet from tweet_details where tweet_id in(select tweet_id from tweets where username=$1)',
			[username.toString()]
		);
		// console.log(response);
		res.status(200).json({
			status: 'success',
			data: {
				users_tweets: response.rows,
			},
		});
	} catch (error) {
		console.error(error.message);
	}
});
//route to get user details
app.get('/getuserdetails/:username', async (req, res) => {
	try {
		const { username } = req.params;
		const response = await db.query(
			'select * from user_details where username=$1',
			[username.toString()]
		);
		// console.log(response);
		res.status(200).json({
			status: 'success',
			data: {
				users_details: response.rows,
			},
		});
	} catch (error) {
		console.error(error.message);
	}
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});