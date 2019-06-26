class App extends React.Component {
	render() {
		return (
			<div>
				<Hello
					to={'Ringo'}
					from={'Paul'}
					num={3}
					data={[1, 2, 3, 4, 5]}
					bangs={4}
				/>
				<Hello to={'Cher'} from={'Sunny'} />
				<Machine s1='a' s2='b' s3='a' />
				<Machine s1='a' s2='a' s3='a' />
				<Machine s1='a' s2='b' s3='a' />
			</div>
		);
	}
}
// function Hello() {
// 	return (
// 		<div>
// 			<h1>Hello there</h1>
// 		</div>
// 	);
// }
ReactDOM.render(<App />, document.getElementById('root'));
