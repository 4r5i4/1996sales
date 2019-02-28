import React, { Component } from 'react';
import Header from './header';
import logo from './logo.svg';
import { Button } from 'reactstrap';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

class App extends Component {
	clickOnMeHandler() {
		console.log('you clicked on me');
	}
	render() {
		return (
			<div className="myApp">
				<Sidebar />
				<Header />
				<Button color="success" onClick={this.clickOnMeHandler}>
					Click on me
				</Button>
			</div>
		);
	}
}

export default App;
