import React from 'react';
import Die from './Die';
import logo from './logo.svg';
import './App.css';
import RollDice from './RollDice';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='App'>
				<RollDice />
			</div>
		);
	}
}
export default App;
