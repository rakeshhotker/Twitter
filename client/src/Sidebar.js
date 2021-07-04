import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import Users from './Users';
function Sidebar({ username }) {
	return (
		<div className='sidebar'>
			{/*Twitter icon*/}
			<div className='app_name'>
				<TwitterIcon className='sidebar__twitterIcon' />
				<h1>My_Tweet</h1>
			</div>
			<SidebarOption active text='Home' />
			<Users username={username} />
			{/*Sidebar component*/}
			{/*Sidebar component*/}
			{/*Sidebar component*/}
		</div>
	);
}

export default Sidebar;
