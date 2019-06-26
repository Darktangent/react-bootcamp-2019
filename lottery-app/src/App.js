import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Lottery />
			<Lottery num={4} maxNum={10} title={'Mini Daily'} />
		</div>
	);
}

export default App;
