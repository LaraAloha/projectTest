import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Results from '../Results';
import questions from './questions';
import styled from 'styled-components';

const DivWrap = styled.div`
	display: flex;	
	flex-direction: column;
	font-size: 1rem;
	padding: 10%;
`;

const TabHead = styled.td`
	text-align: center;
	margin: 2%;
`;

const ButtonResult = styled.button`
	margin: 2%;
	font-size: 1rem; 
`;
class QuestionsObj extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStage: 1, 
			data: questions,
		resultsReady: false
		};		
	}

	answerQuestion(questionId, answer) {
		const newData = {...this.state.data};
		newData.stages[this.state.currentStage].questions[questionId].answered = true;
		newData.stages[this.state.currentStage].questions[questionId].answer = answer;
		this.setState({data: newData});
	}

	nextButtonAvaliable() {
		return Object.values(this.state.data.stages[this.state.currentStage].questions).every(question => question.answered);	
	}

	nextStage = () => {
		this.setState({currentStage: this.state.currentStage+1});
	}

	resultsPage = () => { 
		this.setState({resultsReady: true});
	}

	render() {
	
	return (
		<div>
			<DivWrap>
			{!this.state.resultsReady&&<table>
				<thead>
					<tr>
						<th>Вопросы</th>
						<th>Да</th>
						<th>Нет</th>
						<th>Возможно</th>
					</tr>
				</thead>
			<tbody> 
				{
					Object.entries(this.state.data.stages[this.state.currentStage].questions).map(([questionId, questionData]) => (
						<tr style={{textAlign: 'left'}} key={questionId}>
							<td>{questionData.question}</td>
							<td style={{textAlign: 'center'}} ><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 1}  onChange={()=>this.answerQuestion(questionId, 1)} name={"radio"+questionId} type="radio"></input></td>
							<td style={{textAlign: 'center'}} ><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 2} onChange={()=>this.answerQuestion(questionId, 2)} name={"radio"+questionId} type="radio"></input></td>
							<td style={{textAlign: 'center'}} ><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 3} onChange={()=>this.answerQuestion(questionId, 3)} name={"radio"+questionId} type="radio"></input></td>
						</tr>
					))
				}
			</tbody>
			</table>}
			{this.state.currentStage<=3&& <ButtonResult onClick={this.nextStage} disabled={!this.nextButtonAvaliable()}> 
			Следующая группа вопросов 
			</ButtonResult>}
			{!this.state.resultsReady&&this.state.currentStage==4 && <ButtonResult onClick={this.resultsPage} disabled={!this.nextButtonAvaliable()}> 
			Узнать результат 
			</ButtonResult>}
				{this.state.resultsReady&&<Results data={this.state.data} />}
				</DivWrap>
		</div>
		);
	}
}

export default QuestionsObj;
