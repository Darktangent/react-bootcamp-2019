// function getMood() {
// 	const moods = ['Angry', 'Hungry', 'SIlly', 'Paranoid'];

// 	return moods[Math.floor(Math.random() * moods.length)];
// }
// function getRand() {
// 	return Math.floor(Math.random() * 10) + 1;
// }
// 	<h1>Hello there</h1>
// 				<img src='https://images.unsplash.com/photo-1560942485-b2a11cc13456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80' />
// 				<p>My current mood is: {getMood()}</p>
// 				<p>Your number is: {num}</p>
// 				<p>{num === 7 ? 'congrats' : 'try again'}</p>
// 				<p>Sorry try again</p>
class Hello extends React.Component {
	static defaultProps = {
		from: 'Anon'
	};
	render() {
		let bangs = '!'.repeat(this.props.bangs);
		console.log(this.props.from);

		return (
			<div>
				<p>
					Hi {this.props.to} from {this.props.from}
					{bangs}
				</p>
			</div>
		);
	}
}
