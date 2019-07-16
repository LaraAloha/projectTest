import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Results from '../Results';
import questions from './questions';
import './questions.css';
import styled from 'styled-components';
import { TiArrowRightOutline } from "react-icons/ti";

const SubTitle = styled.p`
	font-size: 1rem;
`;

const Wrap = styled.div`
	display: flex;
	flex-direction: column
	align-items: center;
	padding: 1% 5%;
`;

const ButtonResult = styled.button`
	display: flex;
	margin: 2%;
	max-width: 10%;
	font-size: 1rem; 
	border-style: ridge;
`;

const TabHeadQuestion = styled.div`
	margin: 2%;
	width: 60%;
	font-size: 1rem; 
`;

const TabHead = styled.div`
	display: flex;
	justify-content: center;
	margin: 2%;
	width: 20%;
	font-size: 1rem; 
`;

class QuestionsObj extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStage: 1, 
			data: questions,
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
	    // let useTag = '<use xlink:href="arrow" />';

	return (
		<Wrap style={{padding: '1% 5%'}}>
			<h1>
				Logo GrebenukResulting
			</h1>
			<SubTitle>
				127 построенных систем продаж за 6 лет в РФ
			</SubTitle>
			<h2 style={{margin: '0'}} style={{'marginBottom': '2%'}}>
				Пройдите тест для владельца и узнайте, насколько эффективна ваша система продаж
			</h2>	
			
			{!this.state.resultsReady&& <div> 	
				
				<div style={{display: 'flex', justifyContent: 'center' }}>
						<TabHeadQuestion>
							Вопросы
						</TabHeadQuestion>
						<TabHead>
							Да	
						</TabHead>
						<TabHead>
							Нет	
						</TabHead>
						<TabHead>
							Возможно
						</TabHead>
				</div>
		
				<div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
				{
					Object.entries(this.state.data.stages[this.state.currentStage].questions).map(([questionId, questionData]) => (
						<div key={questionId} style={{display: 'flex', flexDirection: 'row'}}>

							<TabHeadQuestion>{questionData.question}	
							</TabHeadQuestion>
							<TabHead>
								<label style={{display: 'block', width: '100%', height: '100%'}}>
									<input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 1}  onChange={()=>this.answerQuestion(questionId, 1)} name={"radio"+questionId} type="radio"></input>							
								</label>
							</TabHead>
							<TabHead>
								<label style={{display: 'block', width: '100%', height: '100%'}}>
									<input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 2}  onChange={()=>this.answerQuestion(questionId, 2)} name={"radio"+questionId} type="radio"></input>							
								</label>
							</TabHead>
							<TabHead>
								<label style={{display: 'block', width: '100%', height: '100%'}}>
									<input checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 3}  onChange={()=>this.answerQuestion(questionId, 3)} name={"radio"+questionId} type="radio"></input>							
								</label>
							</TabHead>

						</div>
					))
				}
				</div>
			</div>
			}
			
			{this.state.currentStage<=3&&<a onClick={this.nextStage} style={{padding: '3%', cursor: 'pointer', minWidth: '180px', minHeight: '20px'}}>
				<TiArrowRightOutline className='icon-arrow'/>
					<span style={{margin: '0 5%'}}>Далее</span>
				<TiArrowRightOutline />
			</a>
			}
			{!this.state.resultsReady&&this.state.currentStage==4 && <a onClick={this.resultsPage} style={{padding: '0', minWidth: '200px', minHeight: '50px'}}>
				<TiArrowRightOutline />
					<span style={{margin: '0 5%'}}>Узнать результат</span>
				<TiArrowRightOutline />
			</a>}

			{this.state.resultsReady&&<Results data={this.state.data} />}

		</Wrap>
		);
	}
}

export default QuestionsObj;
