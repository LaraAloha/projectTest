import React from 'react';
import logo from './logo.svg';
import Questionnaire from './Questionnaire';
import Results from './Results';
import './App.css';

/**
 * @todo  В стейт можно прописать номер вопроса, на котором пользователь сидит..
 * @todo В стейт сохранять рез-ты каждого ответа для поутинки?
 */

function App() {
	return (
		<div className="App">
			<Questionnaire />
			<Results />
		</div>
	);
}

export default App;
