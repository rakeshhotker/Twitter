import React from 'react';
import Followers from './Followers';
import Following from './Following';
import './Connection.css';
function Connections({ username }) {
	return (
		<div className='connections'>
			<Followers username={username} />
			<Following username={username} />
		</div>
	);
}

export default Connections;
