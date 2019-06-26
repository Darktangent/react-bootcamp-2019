import React, { Component } from 'react';

export default class Clicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rand: 0
		};
	}
	handleNum = e => {
		let random = Math.floor(Math.random() * 10) + 1;
		this.setState({
			rand: random
		});
	};
	render() {
		return (
			<div>
				<h1>Number is:{this.state.rand}</h1>
				{this.state.rand === 7 ? (
					'You win'
				) : (
					<button onClick={this.handleNum}>Click Me</button>
				)}
			</div>
		);
	}
}
