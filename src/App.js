import React from 'react';
import logo from './logo.svg';
import Questionnaire from './Questionnaire';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
	cursor: pointer;
	font-size: 1rem;
	margin: 2%;
`;

/**
 * @todo  В стейт можно прописать номер вопроса, на котором пользователь сидит..
 * @todo В стейт сохранять рез-ты каждого ответа для поутинки?
 */

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
			return (
				<div className="App">
					<Questionnaire />
				</div>
			);
		} 
	}

export default App;
