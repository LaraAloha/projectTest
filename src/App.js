import React from 'react';
import logo from './logo.svg';
import Questionnaire from './Questionnaire';
import Results from './Results';
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
		this.state = {isToggleOn: true};		
	}
	render() {
		if(this.state.isToggleOn) {
			return (
				<div className="App">
					<Questionnaire />
					<Button> 
						Узнать результат 
					</Button>
					{/* { isToggleOn ? <Results /> : null } */}

					<Results />
				</div>
			);
		} else {
			return (
				<div className="App">
					<Questionnaire />
					<Button onClick={this.handleClick}> 
						Узнать результат
					</Button>
					</div>
			);
		}
	}
}

export default App;
