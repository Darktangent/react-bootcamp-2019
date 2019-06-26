class Machine extends React.Component {
	render() {
		const { s1, s2, s3 } = this.props;
		console.log(this.props.s3);
		return (
			<div>
				<p>
					{this.props.s1} {this.props.s2}
					{this.props.s3}
				</p>
				<p>{s1 === s2 && s3 ? 'You win' : 'You lose'}</p>
			</div>
		);
	}
}
