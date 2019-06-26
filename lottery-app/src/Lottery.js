import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

export default class Lottery extends Component {
	static defaultProps = {
		title: 'Lotto',
		numballs: 6,
		maxNum: 40
	};
	constructor(props) {
		super(props);
		this.state = { nums: Array.from({ length: this.props.numballs }) };
		// this.generate = this.generate.bind(this);
		this.handleClick = this.generate.bind(this);
	}
	generate() {
		//pick rand

		this.setState(curState => ({
			nums: curState.nums.map(
				n => Math.floor(Math.random() * this.props.maxNum) + 1
			)
		}));
	}
	handleClick() {
		this.generate();
	}
	render() {
		return (
			<div className='Lottery'>
				<h1>{this.props.title}</h1>
				<div>
					{this.state.nums.map(n => (
						<LotteryBall num={n} />
					))}
				</div>
				<button onClick={this.handleClick}>Generate</button>
			</div>
		);
	}
}
