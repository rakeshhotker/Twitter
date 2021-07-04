import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import Users from './Users';
function Sidebar({ username }) {
	return (
		<div className='sidebar'>
			{/*Twitter icon*/}
			<TwitterIcon className='sidebar__twitterIcon' />
			<SidebarOption active text='Home' />
			<Users username={username} />
			{/*Sidebar component*/}
			{/*Sidebar component*/}
			{/*Sidebar component*/}
		</div>
	);
}

export default Sidebar;
