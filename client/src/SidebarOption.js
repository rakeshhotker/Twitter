import React from 'react';
import './SidebarOption.css';
function SidebarOption({ active, text }) {
	return (
		<div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
			<h3>{text}</h3>
		</div>
	);
}

export default SidebarOption;
