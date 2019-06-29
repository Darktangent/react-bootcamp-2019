import React, { Component } from 'react';

export default class AnnoyingForm extends Component {
	handleKeyUp(e) {
		if (e.keyCode === 56) {
			alert('****I love * Character ******');
		} else {
			console.log('Boo');
		}
	}
	render() {
		return (
			<div>
				<h3>Try typing in here</h3>
				<textarea onKeyUp={this.handleKeyUp} />
			</div>
		);
	}
}
