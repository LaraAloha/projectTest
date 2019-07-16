import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Results from '../Results';
import questions from './questions';

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
						<tr key={questionId}>
							<td>{questionData.question}</td>
							<td><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 1}  onChange={()=>this.answerQuestion(questionId, 1)} name={"radio"+questionId} type="radio"></input></td>
							<td><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 2} onChange={()=>this.answerQuestion(questionId, 2)} name={"radio"+questionId} type="radio"></input></td>
							<td><input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 3} onChange={()=>this.answerQuestion(questionId, 3)} name={"radio"+questionId} type="radio"></input></td>
						</tr>
					))
				}
			</tbody>
			</table>}
			{this.state.currentStage<=3&& <button onClick={this.nextStage} disabled={!this.nextButtonAvaliable()}> 
			Следующая группа вопросов 
			</button>}
			{!this.state.resultsReady&&this.state.currentStage==4 && <button onClick={this.resultsPage} disabled={!this.nextButtonAvaliable()}> 
			Узнать результат 
			</button>}
				{this.state.resultsReady&&<Results data={this.state.data} />}
		</div>
	);
	}
}

export default QuestionsObj;
