import React, { Component } from 'react';

export default class Demo extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			color: 'cyan'
		};
	}

	render() {
		return (
			<div>
				<h1>{this.state.color}</h1>
			</div>
		);
	}
}
