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
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 5px 15px;
	font-size: 11px; 
    font-family: 'Roboto',Arial,sans-serif;
`;

const Columns = styled.div`
	-webkit-column-count: 2;  
	-moz-column-count: 2;  
	column-count: 2;  
	padding: 20px 0;
	column-gap: 10em;
	width: 70%;
    column-rule: 1px solid #ccc;
    font-size: 18px;
    line-height: 1.55;
`;

const ButtonResult = styled.button`
	margin: 5px;
	max-width: 10%;
	border-style: ridge;
`;

const TabHeadQuestion = styled.div`
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
	padding: 20px 0 40px 0;
`;

const FlexAll = styled.div`
	display: flex;
	flex-direction: column;
`;

const FlexAll2 = styled.div`
	display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const SmallFlex = styled.div`
	display: flex;
	align-items: center;
	height: 10px;
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

return (
	<Wrap>
		<img src={logo} width="125" height="49" style={{margin: '5px'}}>
			</img>
		<SubTitle>
			127 построенных систем продаж за 6 лет в РФ
		</SubTitle>
		
		{!this.state.resultsReady&&
		<div>
			<h2 style={{margin: '10px 0', textAlign: 'center'}}>
				Пройдите тест для владельца и узнайте, насколько эффективна ваша система продаж
			</h2>	
			
			<FlexAll2>
				<Columns>
					<div>
						{ Object.entries(this.state.data.stages[this.state.currentStage].questions).map(([questionId, questionData]) => (
							<FlexAll>
								<TabHeadQuestion>{questionData.question}	
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
						)) }
					</div>
				</Columns>
			</FlexAll2>
		</div>
}
		
		{this.state.currentStage<=3&&	
			<ButtonBottom onClick={this.nextStage}>
			<GoChevronRight />
				<span style={{margin: '0 5px'}}>Далее</span>
			<GoChevronRight />
			</ButtonBottom>
		}
		{!this.state.resultsReady&&this.state.currentStage==4&&
			<ButtonBottom onClick={this.resultsPage}>
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
