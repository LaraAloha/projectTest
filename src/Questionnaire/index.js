import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Results from '../Results';
import questions from './questions';
import logo from './logo.png';
import './questions.css';
import styled from 'styled-components';
import { GoChevronRight } from "react-icons/go";

const SubTitle = styled.p`
	font-size: 11px; 
	margin: 5px 0;
`;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5px 15px;
	font-size: 11px; 
`;

const ButtonResult = styled.button`
	margin: 5px;
	max-width: 10%;
	border-style: ridge;
`;

const TabHeadQuestion = styled.div`
	display: flex;
`;

const TabHead = styled.div`
	display: flex;
	margin: 5px;
`;

const ButtonBottom = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	cursor: pointer;
	margin-top: 10px;
`;

const FlexRadio = styled.div`
	display: flex;
	padding: 5px;
`;

const FlexAll = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-items: flex-start;
`;


const SmallFlex = styled.div`
	display: flex;
	align-items: center;
	height: 10px;
	justify-content: flex-start;
	cursor: pointer;
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
		<Wrap style={{padding: '5px 50px'}}>
			<img src={logo} width="125" height="49" style={{margin: '5px'}}>
			 </img>
			<SubTitle>
				127 построенных систем продаж за 6 лет в РФ
			</SubTitle>
			
			{!this.state.resultsReady&& <div>
			<h2 style={{margin: '10px 0'}}>
				Пройдите тест для владельца и узнайте, насколько эффективна ваша система продаж
			</h2>	
				<div>
				{
					Object.entries(this.state.data.stages[this.state.currentStage].questions).map(([questionId, questionData]) => (
						<FlexAll key={questionId}>

							<TabHeadQuestion style={{textAlign: 'left'}}>{questionData.question}	
							</TabHeadQuestion>

							<FlexRadio>
								<TabHead>
									<label style={{display: 'block', width: '100%', height: '20%'}}>
										<SmallFlex>
											<p style={{margin: '0 5px'}}> Да</p>
											<input style={{cursor: 'pointer'}} checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 1} onChange={()=>this.answerQuestion(questionId, 1)} name={"radio"+questionId} type="radio"></input>							
										</SmallFlex>
									</label>
								</TabHead>
								<TabHead>
									<label style={{display: 'block', width: '100%', height: '100%'}}>
									<SmallFlex>
										<p style={{margin: '0 5px'}}>Нет</p>
										<input style={{cursor: 'pointer'}} checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 2}  onChange={()=>this.answerQuestion(questionId, 2)} name={"radio"+questionId} type="radio"></input>							
										</SmallFlex>
									</label>
								</TabHead>
								<TabHead>
									<label style={{display: 'block', width: '100%', height: '100%'}}>
									<SmallFlex>
										<p style={{margin: '0 5px'}}>Возможно</p>
										<input style={{cursor: 'pointer'}}  checked={this.state.data.stages[this.state.currentStage].questions[questionId].answer == 3}  onChange={()=>this.answerQuestion(questionId, 3)} name={"radio"+questionId} type="radio"></input>							
										</SmallFlex>
									</label>
								</TabHead>
							</FlexRadio>
							
						</FlexAll>
					))
				}
				</div>
			</div>
			}
			
			{this.state.currentStage<=3&&	
				<ButtonBottom onClick={this.nextStage}>
			<GoChevronRight />
					<span style={{margin: '0 5px'}}>Далее</span>
				<GoChevronRight />
			</ButtonBottom>
			}
			{!this.state.resultsReady&&this.state.currentStage==4 && <ButtonBottom onClick={this.resultsPage}>
			<GoChevronRight />
					<span style={{margin: '0 5px'}}>Узнать результат</span>
				<GoChevronRight />
			</ButtonBottom>}

			{this.state.resultsReady&&<Results data={this.state.data} />}

		</Wrap>
		);
	}
}

export default QuestionsObj;
