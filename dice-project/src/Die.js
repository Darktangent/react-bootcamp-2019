import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let cls = `Die fas fa-dice-${this.props.face} ${
			this.props.rolling ? 'shaking' : ''
		}`;
		return (
			<div>
				<i className={cls} />
			</div>
		);
	}
}
