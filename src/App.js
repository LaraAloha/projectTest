import React from 'react';
import logo from './logo.svg';
import Questionnaire from './Questionnaire';
import Results from './Results';
import './App.css';

function App() {
	return (
		<div className="App">
			<Questionnaire />
			<Results />
		</div>
	);
}

export default App;
