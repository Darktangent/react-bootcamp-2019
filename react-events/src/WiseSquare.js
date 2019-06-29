import React, { Component } from 'react';
import './WiseSquare.css';

export default class WiseSquare extends Component {
	static defaultProps = {
		messages: [
			'No one can make you feel inferior without your consent.Eleanor Roosevelt',
			`It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.`,
			`The fool doth think he is wise, but the wise man knows himself to be a fool`
		]
	};
	constructor(props) {
		super(props);
		this.dispenseWisdom = this.dispenseWisdom.bind(this);
	}
	dispenseWisdom() {
		let { messages } = this.props;
		let rdIdx = Math.floor(Math.random() * messages.length);
		console.log(messages[rdIdx]);
	}
	render() {
		return (
			<div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>
				<span>😁</span>
			</div>
		);
	}
}
