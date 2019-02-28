import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import SideCard from './SideCard';

const Sidebar = (props) => {
	return (
		<ButtonGroup vertical style={{ height: '100px' }}>
			{/* <SideCard />
			<SideCard />
			<SideCard /> */}
			<Button color="success">Sales</Button>
			<Button />
			<Button>2</Button>
			<Button>2</Button>
		</ButtonGroup>
	);
};

export default Sidebar;
